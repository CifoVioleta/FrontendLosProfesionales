import { useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { UserContext } from "../middleware/UserContext.jsx";
import AuthNavTabs from "../components/main/navtabhome/AuthNavTabs.jsx";
import PropTypes from "prop-types";

const UserPage = () => {
  const { state } = useContext(UserContext);
  const { tab } = useParams(); // Obtienela pestaña de la URL
  const location = useLocation(); // Obtiene la ubicación para manejar submenú

  return (
    <>
      <AuthNavTabs
        userType={state.userType}
        selectedTab={tab}
        location={location}
      />
    </>
  );
};

UserPage.propTypes = {
  userType: PropTypes.string.isRequired,
};

export default UserPage;
