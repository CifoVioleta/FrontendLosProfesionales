import { useState, useContext } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Button, Tooltip, Avatar, Dialog, DialogActions, DialogContent, Container } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import AdbIcon from "@mui/icons-material/Adb";
import Register from "./avatar/Register.jsx";
import Login from "./avatar/Login.jsx";
import ControlledAccordions from "../main/ControlledAccordions.jsx";
import { DialogContext } from "../../middleware/DialogContext.jsx";
import { UserContext } from '../../middleware/UserContext.jsx';
import PropTypes from "prop-types";

const pages = ["Servicios", "Profesionales"];

function ResponsiveAppBar({ onLogin }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { openDialog, dialogContent, handleDialogOpen, handleDialogClose } = useContext(DialogContext);
  const { state, dispatch } = useContext(UserContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogin = (type, userNickname, userData) => {
    dispatch({ type: 'LOGIN', payload: { userType: type, nickname: userNickname } });
    onLogin(userData); // Llama a la función onLogin pasada como prop
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  let settings = [];

  if (state.isLoggedIn) {
    if (state.userType === "Empleador") {
      settings = [
        { name: "Editar perfil", component: "Editar perfil" },
        { name: "Solicitudes", component: "Solicitudes" },
        { name: "Servicios", component: "Servicios" },
        { name: "Historial", component: "Historial" },
        { name: "Cerrar sesión", component: "Cerrar sesión", action: handleLogout },
      ];
    } else if (state.userType === "Profesional") {
      settings = [
        { name: "Editar perfil", component: "Editar perfil" },
        { name: "Solicitudes", component: "Solicitudes" },
        { name: "Servicios", component: "Servicios" },
        { name: "Proyectos", component: "Proyectos" },
        { name: "Historial", component: "Historial" },
        { name: "Cerrar sesión", component: "Cerrar sesión", action: handleLogout },
      ];
    }
  } else {
    settings = [
      { name: "Registrarse", component: "Registrarse", action: () => handleDialogOpen(<Register />) },
      { name: "Iniciar sesión", component: "Iniciar sesión", action: () => handleDialogOpen(<Login onLogin={handleLogin} />) },
    ];
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
          >
            PROFESIONALES
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
          >
            PROFESIONALES
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={state.nickname || ""} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            {state.isLoggedIn && (
              <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", md: "1rem" }, color: "white", ml: 1 }}>
                {state.nickname}
              </Typography>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={setting.action ? setting.action : handleCloseUserMenu}>
                  <Typography textAlign="center">{setting.component}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        <ControlledAccordions isLoggedIn={state.isLoggedIn} userType={state.userType} />
        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogContent>{dialogContent}</DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </AppBar>
  );
}

ResponsiveAppBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default ResponsiveAppBar;