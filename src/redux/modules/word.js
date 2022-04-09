// word.js

import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";

const initialState = {
  list: [],
};

// Action Creators
export function loadWord(word_list) {
  return { type: LOAD, word_list };
}
export function createWord(word) {
  return { type: CREATE, word };
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
    const docRef = await addDoc(collection(db, "words"), word);
    const word_data = { id: docRef.id, ...word };

    dispatch(createWord(word_data));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD": {
      return { list: action.word_list };
    }
    case "word/CREATE": {
      const new_word_list = [...state.list, action.word];
      return { list: new_word_list };
    }
    default:
      return state;
  }
}
