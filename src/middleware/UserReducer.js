export const initialState = {
  isLoggedIn: false,
  userType: null,
  nickname: null,
  // Otros datos del usuario que necesites
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        userType: action.payload.userType,
        nickname: action.payload.nickname,
        // Otros datos del usuario que necesites
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        userType: null,
        nickname: null,
      };
    default:
      return state;
  }
};