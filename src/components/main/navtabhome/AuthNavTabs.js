import { useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes
import Box from "@mui/material/Box";
import BreadcrumbsComponent from "./BreadcrumbsComponent";
import NavTabs from "./NavTabs";

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
// Definición de PropTypes para AuthNavTabs
AuthNavTabs.propTypes = {
  userType: PropTypes.string.isRequired, // Espera que userType sea de tipo string y es requerido
};

export default AuthNavTabs;