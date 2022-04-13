// word.js

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";
const UPDATE = "word/UPDATE";
const DELETE = "word/DELETE";
const LOADED = "word/LOADED";

const initialState = {
  is_loaded: false,
  list: [],
};

// Action Creators
export function loadWord(word_list) {
  return { type: LOAD, word_list };
}

export function createWord(word) {
  return { type: CREATE, word };
}

export function updateWord(word_index) {
  return { type: UPDATE, word_index };
}

export function deleteWord(word_index) {
  return { type: DELETE, word_index };
}

export function isLoaded(loaded) {
  return { type: LOADED, loaded };
}

// middlewares
export const loadWordFB = () => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "words"));

    let word_list = [];

    word_data.forEach((doc) => {
      word_list.push({ id: doc.id, ...doc.data() });
    });

    dispatch(loadWord(word_list));
  };
};

export const addWordFB = (word) => {
  return async function (dispatch) {
    dispatch(isLoaded(false));
    const docRef = await addDoc(collection(db, "words"), word);
    const word_data = { id: docRef.id, ...word };

    dispatch(createWord(word_data));
  };
};

export const updateWordFB = (word_id, title, detail, example) => {
  return async function (dispatch, getState) {
    dispatch(isLoaded(false));
    const docRef = doc(db, "words", word_id);
    await updateDoc(docRef, {
      title,
      detail,
      example,
    });
    const _word_list = getState().word.list;
    const word_index = _word_list.findIndex((b) => {
      return b.id === word_id;
    });

    dispatch(updateWord(word_index));
  };
};

export const deleteWordFB = (word_id) => {
  return async function (dispatch, getState) {
    dispatch(isLoaded(false));
    const docRef = doc(db, "words", word_id);
    await deleteDoc(docRef);
    const _word_list = getState().word.list;
    const word_index = _word_list.findIndex((b) => {
      return b.id === word_id;
    });

    dispatch(deleteWord(word_index));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD": {
      return { list: action.word_list, is_loaded: true };
    }

    case "word/CREATE": {
      const new_word_list = [...state.list, action.word];
      return { ...state, list: new_word_list, is_loaded: true };
    }

    case "word/UPDATE": {
      const new_word_list = state.list.map((l, idx) => {
        if (parseInt(action.word_index) === idx) {
          return { ...l };
        } else {
          return l;
        }
      });
      return { ...state, list: new_word_list, is_loaded: true };
    }

    case "word/DELETE": {
      const new_word_list = state.list.filter((l, idx) => {
        return parseInt(action.word_index) !== idx;
      });
      return { ...state, list: new_word_list, is_loaded: true };
    }

    case "word/LOADED": {
      return { ...state, is_loaded: action.loaded };
    }

    default:
      return state;
  }
}
