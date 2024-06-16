import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import AuthNavTabs from '../components/main/navtabhome/AuthNavTabs';

const UserPage = ({ userType }) => {
  const { id } = useParams();

  return (
    <div>
      <AuthNavTabs selectedTab={id} userType={userType} />
    </div>
  );
};

UserPage.propTypes = {
  userType: PropTypes.string.isRequired,
};

export default UserPage;