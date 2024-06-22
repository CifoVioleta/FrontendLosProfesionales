import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  Container,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import AdbIcon from "@mui/icons-material/Adb";
import Register from "./avatar/Register.jsx";
import Login from "./avatar/Login.jsx";
import { DialogContext } from "../../middleware/DialogContext.jsx";
import { UserContext } from "../../middleware/UserContext.jsx";
import ServiceList from "../main/mainUser/services/ServiceList.jsx";
import PropTypes from "prop-types";

const pages = [ 
  { name: "Servicios", path: "/services" },
  { name: "Profesionales", path: "/professionals" }];

const appBarColor = "#1976d2"; // Color azul original

function ResponsiveAppBar({ onLogin }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { openDialog, dialogContent, handleDialogOpen, handleDialogClose } =
    useContext(DialogContext);
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

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
    dispatch({
      type: "LOGIN",
      payload: { userType: type, nickname: userNickname },
    });
    onLogin(userData); // Llama a la función onLogin pasada como prop
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleMenuClick = (path) => {
    handleCloseUserMenu();
    navigate(path);
  };

  let settings = [];

  if (state.isLoggedIn) {
    if (state.userType === "Empleador") {
      settings = [
        {
          name: "Editar perfil",
          component: (
            <MenuItem onClick={() => handleMenuClick("/user/editar-perfil")}>
              <Typography textAlign="center" color={appBarColor}>
                Editar perfil
              </Typography>
            </MenuItem>
          ),
        },
        {
          name: "Solicitudes",
          component: (
            <MenuItem onClick={() => handleMenuClick("/user/solicitudes")}>
              <Typography textAlign="center" color={appBarColor}>
                Solicitudes
              </Typography>
            </MenuItem>
          ),
        },
        {
          name: "Servicios",
          component: (
            <MenuItem onClick={() => handleMenuClick("/user/servicios")}>
              <Typography textAlign="center" color={appBarColor}>
                Servicios
              </Typography>
            </MenuItem>
          ),
        },
        {
          name: "Historial",
          component: (
            <MenuItem onClick={() => handleMenuClick("/user/historial")}>
              <Typography textAlign="center" color={appBarColor}>
                Historial
              </Typography>
            </MenuItem>
          ),
        },
        {
          name: "Cerrar sesión",
          component: (
            <MenuItem
              onClick={() => {
                handleCloseUserMenu();
                handleLogout();
              }}
            >
              <Typography textAlign="center" color={appBarColor}>
                Cerrar sesión
              </Typography>
            </MenuItem>
          ),
        },
      ];
    } else if (state.userType === "Profesional") {
      settings = [
        {
          name: "Editar perfil",
          component: (
            <MenuItem onClick={() => handleMenuClick("/user/editar-perfil")}>
              <Typography textAlign="center" color={appBarColor}>
                Editar perfil
              </Typography>
            </MenuItem>
          ),
        },
        {
          name: "Solicitudes",
          component: (
            <MenuItem onClick={() => handleMenuClick("/user/solicitudes")}>
              <Typography textAlign="center" color={appBarColor}>
                Solicitudes
              </Typography>
            </MenuItem>
          ),
        },
        {
          name: "Servicios",
          component: (
            <MenuItem onClick={() => handleMenuClick("/user/servicios")}>
              <Typography textAlign="center" color={appBarColor}>
                Servicios
              </Typography>
            </MenuItem>
          ),
        },
        {
          name: "Proyectos",
          component: (
            <MenuItem onClick={() => handleMenuClick("/user/proyectos")}>
              <Typography textAlign="center" color={appBarColor}>
                Proyectos
              </Typography>
            </MenuItem>
          ),
        },
        {
          name: "Historial",
          component: (
            <MenuItem onClick={() => handleMenuClick("/user/historial")}>
              <Typography textAlign="center" color={appBarColor}>
                Historial
              </Typography>
            </MenuItem>
          ),
        },
        {
          name: "Cerrar sesión",
          component: (
            <MenuItem
              onClick={() => {
                handleCloseUserMenu();
                handleLogout();
              }}
            >
              <Typography textAlign="center" color={appBarColor}>
                Cerrar sesión
              </Typography>
            </MenuItem>
          ),
        },
      ];
    }
  } else {
    settings = [
      {
        name: "Registrarse",
        component: (
          <MenuItem onClick={() => handleDialogOpen(<Register />)}>
            <Typography textAlign="center" color={appBarColor}>
              Registrarse
            </Typography>
          </MenuItem>
        ),
      },
      {
        name: "Iniciar sesión",
        component: (
          <MenuItem
            onClick={() => handleDialogOpen(<Login onLogin={handleLogin} />)}
          >
            <Typography textAlign="center" color={appBarColor}>
              Iniciar sesión
            </Typography>
          </MenuItem>
        ),
      },
    ];
  }

  return (
    <AppBar position="static" sx={{ bgcolor: "transparent", color: appBarColor, boxShadow: "none" }}>
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: appBarColor }} />
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
            color: appBarColor,
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
            <MenuItem onClick={() => handleMenuClick("/services")}>
              <Typography textAlign="center" color={appBarColor}>Servicios</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClick("/professionals")}>
              <Typography textAlign="center" color={appBarColor}>Profesionales</Typography>
            </MenuItem>
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button onClick={() => handleMenuClick("/services")} sx={{ my: 2, color: appBarColor, display: "block" }}>
            Servicios
          </Button>
          <Button onClick={() => handleMenuClick("/professionals")} sx={{ my: 2, color: appBarColor, display: "block" }}>
            Profesionales
          </Button>
        </Box>
        <Box sx={{ flexGrow: 0, textAlign: "center" }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={state.nickname || "Remy Sharp"} src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          {state.isLoggedIn && (
            <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", md: "1rem" }, color: appBarColor }}>
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
            <MenuItem onClick={() => handleMenuClick("/user/editar-perfil")}>
              <Typography textAlign="center">Editar Perfil</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClick("/user/solicitudes")}>
              <Typography textAlign="center">Solicitudes</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClick("/user/servicios")}>
              <Typography textAlign="center">Servicios</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClick("/user/historial")}>
              <Typography textAlign="center">Historial</Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <Typography textAlign="center">Cerrar sesión</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </Container>
    <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="xs" fullWidth>
      <DialogContent>{dialogContent}</DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>Close</Button>
      </DialogActions>
    </Dialog>
  </AppBar>
);
}

ResponsiveAppBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default ResponsiveAppBar;
