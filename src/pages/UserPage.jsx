import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import AuthNavTabs from "../components/main/navtabhome/AuthNavTabs.jsx";

const UserPage = ({ userType }) => {
  const { section } = useParams();

  return (
    <div>
      <AuthNavTabs selectedTab={section} userType={userType} />
    </div>
  );
};

UserPage.propTypes = {
  userType: PropTypes.string.isRequired,
};

export default UserPage;