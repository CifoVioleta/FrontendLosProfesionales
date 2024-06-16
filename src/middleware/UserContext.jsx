import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Puedes inicializar con los datos de usuario según necesites

  const loginUser = (userData) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
  }; 

  return (
    <UserContext.Provider value={{ user,loginUser, logoutUser}}>
      {children}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
    children: PropTypes.node.isRequired // Define PropTypes para children
  };
  export { UserProvider, UserContext };