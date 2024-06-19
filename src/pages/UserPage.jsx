import { useContext } from "react";
import { UserContext } from "../middleware/UserContext.jsx";
import AuthNavTabs from '../components/main/navtabhome/AuthNavTabs.jsx';


const UserPage = () => {
  const { state } = useContext(UserContext);
  return (
    <>
      <AuthNavTabs userType={state.userType} />
    </>
  );
};


export default UserPage;