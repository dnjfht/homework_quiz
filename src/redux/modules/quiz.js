// action value
const ADDANSWER = "add_answer";

// action creator
export const addAnswer = (payload) => {
  return {
    type: ADDANSWER,
    payload: payload,
  };
};

// initialState
const initialState = {
  quiz_list: [
    { question: "명준님은 잘생겼다.", answer: true },
    { question: "redux는 너무 어렵다.", answer: true },
    { question: "원준님은 자상하시다.", answer: false },
    { question: "나는 똑똑하다", answer: false },
    { question: "나는 살을 뺄 의지가 있다.", answer: true },
    { question: "javascript 비동기는 쉽다.", answer: false },
  ],
  user_answer_list: [],
};

// reducer
const quiz = (state = initialState, action) => {
  switch (action.type) {
    case ADDANSWER: {
      const new_user_answer_list = [...state.user_answer_list, action.payload];
      return { ...state, user_answer_list: new_user_answer_list };
    }

    default:
      return state;
  }
};

export default quiz;
