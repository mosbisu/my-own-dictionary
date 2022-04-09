// word.js

// Actions
const CREATE = "word/CREATE";

const initialState = {
  list: [],
};

// Action Creators
export function createBucket(word) {
  return { type: CREATE, word };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/CREATE": {
      const new_word_list = [...state.list, action.word];
      return { list: new_word_list };
    }
    default:
      return state;
  }
}
