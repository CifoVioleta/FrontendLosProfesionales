import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

import EditProfile from "../mainUser/editProfile/EditProfile.jsx";
import Projects from "../mainUser/projects/Projects.jsx";
import RecordUser from "../mainUser/record/RecordUser.jsx";
import RequestUserView from "../mainUser/request/RequestUserView.jsx";
import ServicesEmploye from "../mainUser/services/ServicesEmploye.jsx";
import ServicesProfessional from "../mainUser/services/SevicesProfessional.jsx";

export default function NavTabs({
  userRole,
  currentTab,
  setCurrentTab,
  setSubmenuValue,
}) {
  const [value, setValue] = React.useState(currentTab || "1");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [submenuValue, setSubmenuValueLocal] = React.useState("Todos");

  React.useEffect(() => {
    setValue(currentTab);
  }, [currentTab]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentTab(newValue);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSubmenuClick = (value) => {
    setSubmenuValueLocal(value);
    setSubmenuValue(value); // Actualiza el estado del submenú en AuthNavTabs
    setValue("3"); // Ensure the third tab (Servicios) is selected
    setCurrentTab("3"); // Actualiza el estado del tab seleccionado en AuthNavTabs
    handleMenuClose();
  };

  const renderEmpleadorTabs = () => {
    return (
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Editar perfil" value="1" />
              <Tab label="Solicitudes" value="2" />
              <Tab label="Servicios" value="3" />
              <Tab label="Historial" value="4" />
            </TabList>
          </Box>
        </TabContext>
      </Box>
    );
  };

  const renderProfesionalTabs = () => {
    return (
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs">
              <Tab label="Editar perfil" value="1" />
              <Tab label="Solicitudes" value="2" />
              <Tab
                label="Servicios"
                value="3"
                aria-controls="servicios-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
              />
              <Tab label="Proyectos" value="4" />
              <Tab label="Historial" value="5" />
            </TabList>
          </Box>
        </TabContext>
      </Box>
    );
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {userRole === "Empleador"
              ? renderEmpleadorTabs()
              : renderProfesionalTabs()}
          </TabList>
        </Box>
        {userRole === "Empleador" ? (
          <>
            <TabPanel value="1">
              <EditProfile />
            </TabPanel>
            <TabPanel value="2">
              <RequestUserView />
            </TabPanel>
            <TabPanel value="3">
              <ServicesEmploye />
            </TabPanel>
            <TabPanel value="4">
              <RecordUser />
            </TabPanel>
          </>
        ) : (
          <>
            <TabPanel value="1">
              <EditProfile />
            </TabPanel>
            <TabPanel value="2">
              <RequestUserView />
            </TabPanel>
            <TabPanel value="3">
              <ServicesProfessional submenuValue={submenuValue} />
            </TabPanel>
            <TabPanel value="4">
              <Projects />
            </TabPanel>
            <TabPanel value="5">
              <RecordUser />
            </TabPanel>
          </>
        )}
      </TabContext>
      <Menu
        id="servicios-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleSubmenuClick("Todos")}>Todos</MenuItem>
        <MenuItem onClick={() => handleSubmenuClick("Activos")}>
          Activos
        </MenuItem>
        <MenuItem onClick={() => handleSubmenuClick("Inactivos")}>
          Inactivos
        </MenuItem>
        <MenuItem onClick={() => handleSubmenuClick("Añadir servicio")}>
          Añadir servicio
        </MenuItem>
      </Menu>
    </Box>
  );
}

NavTabs.propTypes = {
  userRole: PropTypes.string.isRequired,
  currentTab: PropTypes.string.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
  setSubmenuValue: PropTypes.func.isRequired,
};
