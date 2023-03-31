// action value
const CHANGEUSERNAME = "change_user_name";

// action creator
export const changeName = (payload) => {
  return {
    type: CHANGEUSERNAME,
    payload: payload,
  };
};

// initialState
const initialState = {
  nickName: "",
};

// reducer
const user = (state = initialState, action) => {
  switch (action.type) {
    case CHANGEUSERNAME: {
      return { ...state, nickName: action.payload };
    }
    default:
      return state;
  }
};

export default user;
