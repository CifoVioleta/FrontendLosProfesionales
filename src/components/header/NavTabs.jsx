import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function LabTabs({ userType }) {
  const [value, setValue] = React.useState("1");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [submenuValue, setSubmenuValue] = React.useState("Todos");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSubmenuClick = (value) => {
    setSubmenuValue(value);
    setValue("3"); // Ensure the third tab (Servicios) is selected
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
            <TabList onChange={handleChange} aria-label="lab API tabs example">
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

  const renderEmpleadorTabPanels = () => {
    return (
      <>
        <TabPanel value="1">Contenido de Editar perfil para Empleador</TabPanel>
        <TabPanel value="2">Contenido de Solicitudes para Empleador</TabPanel>
        <TabPanel value="3">Contenido de Servicios para Empleador</TabPanel>
        <TabPanel value="4">Contenido de Historial para Empleador</TabPanel>
      </>
    );
  };

  const renderProfesionalTabPanels = () => {
    return (
      <>
        <TabPanel value="1">
          Contenido de Editar perfil para Profesional
        </TabPanel>
        <TabPanel value="2">Contenido de Solicitudes para Profesional</TabPanel>
        <TabPanel value="3">{submenuValue}</TabPanel>
        <TabPanel value="4">Contenido de Proyectos para Profesional</TabPanel>
        <TabPanel value="5">Contenido de Historial para Profesional</TabPanel>
      </>
    );
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {userType === "empleador"
              ? renderEmpleadorTabs()
              : renderProfesionalTabs()}
          </TabList>
        </Box>
        {userType === "empleador"
          ? renderEmpleadorTabPanels()
          : renderProfesionalTabPanels()}
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
