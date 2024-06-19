import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import BreadcrumbsComponent from "./BreadcrumbsComponent.jsx";
import NavTabs from "./NavTabs.jsx";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function AuthNavTabs({ userType, selectedTab }) {
  const [currentTab, setCurrentTab] = useState(selectedTab || "1");
  const [submenuValue, setSubmenuValue] = useState("Todos");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/").slice(1); // Dividir en partes y manejar submenú
    switch (path[1]) {
      case "editar-perfil":
        setCurrentTab("1");
        break;
      case "solicitudes":
        setCurrentTab("2");
        break;
      case "servicios":
        setCurrentTab("3");
        setSubmenuValue(path[2] || "Todos"); // Manejar submenú
        break;
      case "proyectos":
        setCurrentTab("4");
        break;
      case "historial":
        setCurrentTab("5");
        break;
      default:
        setCurrentTab("1");
    }
  }, [location]);

  return (
    <Box sx={{ p: 2 }}>
      <BreadcrumbsComponent
        currentTab={currentTab}
        submenuValue={submenuValue}
      />
      <NavTabs
        userRole={userType}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        setSubmenuValue={setSubmenuValue}
      />
    </Box>
  );
}

AuthNavTabs.propTypes = {
  userType: PropTypes.string,
  selectedTab: PropTypes.string,
};

export default AuthNavTabs;
