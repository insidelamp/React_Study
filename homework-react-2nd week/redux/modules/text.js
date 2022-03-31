import { db } from "../../firebase";

import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const LOAD = "text/LOAD";
const CREATE = "text/CREATE";
const UPDATE = "text/UPDATE";
const DELETE = "text/DELETE";

const initialState = {
  list: [],
};
export function loadText(text_list) {
  return { type: LOAD, text_list };
}

export function createText(text) {
  return { type: CREATE, text: text };
}
export function updateText(textId, textObject) {
  return { type: UPDATE, textId, textObject };
}

export function deleteText(text_index) {
  return { type: DELETE, text_index };
}

// middlewares

export const loadTextFB = () => {
  return async function (dispatch) {
    const text_data = await getDocs(collection(db, "mytext"));

    let text_list = [];

    text_data.forEach((b) => {
      text_list.push({ id: b.id, ...b.data() });
    });
    dispatch(loadText(text_list));
  };
};

export const addTextFB = (text) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "mytext"), text);
    const _text = await getDoc(docRef);
    const text_data = { id: _text.id, ..._text.data() };
    dispatch(createText(text_data));
  };
};

export const updateTextFB = (textId, textObject) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "mytext", textId);
    await updateDoc(docRef, textObject);

    dispatch(updateText(textId, textObject));
  };
};

export const deleteTextFB = (text_id) => {
  return async function (dispatch, getState) {
    if (!text_id) {
      window.alert("아이디가 없음!");
      return;
    }
    const docRef = doc(db, "mytext", text_id);
    await deleteDoc(docRef);

    const _text_list = getState().text.list;
    const text_index = _text_list.findIndex((b) => {
      return b.id === text_id;
    });
    dispatch(deleteText(text_index));
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
      return { list: action.text_list };
    }
    case CREATE: {
      console.log("이제 값을 바꿀거야!");
      const new_text_list = [...state.list, action.text];
      return { list: new_text_list };
    }

    case UPDATE: {
      const new_text_list = state.list.map((item) => {
        if (action.textId === item.id) {
          return {
            ...item,
            word: action.textObject.word,
            explanation: action.textObject.explanation,
            example: action.textObject.example,
          };
        } else {
          return item;
        }
      });
      return { list: new_text_list };
    }
    case DELETE: {
      const new_text_list = state.list.filter((l, idx) => {
        return parseInt(action.text_index) !== idx;
      });
      return { list: new_text_list };
    }

    default:
      return state;
  }
}
