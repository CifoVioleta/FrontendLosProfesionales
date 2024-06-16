import { useState } from "react";
import Box from "@mui/material/Box";
import BreadcrumbsComponent from "./BreadcrumbsComponent.jsx";
import NavTabs from "./NavTabs.jsx";
import PropTypes from "prop-types";

function AuthNavTabs({ userType }) {
  const [currentTab, setCurrentTab] = useState("1");
  const [submenuValue, setSubmenuValue] = useState("Todos"); // Estado del submenú

  return (
    <Box sx={{ p: 2 }}>
      <BreadcrumbsComponent currentTab={currentTab} submenuValue={submenuValue} />
      <NavTabs userRole={userType} setCurrentTab={setCurrentTab} setSubmenuValue={setSubmenuValue} />
    </Box>
  );
}
AuthNavTabs.propTypes = {
  userType: PropTypes.string.isRequired, // Asegúrate de que userType es una string y es requerida
};

export default AuthNavTabs;