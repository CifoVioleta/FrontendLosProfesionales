import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

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

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};