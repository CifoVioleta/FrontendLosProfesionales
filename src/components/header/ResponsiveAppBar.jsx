import { useState, useContext } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Button, Tooltip, Avatar, Dialog, DialogActions, DialogContent, Container } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import AdbIcon from '@mui/icons-material/Adb';
import Register from './avatar/Register';
import Login from './avatar/Login';
import ControlledAccordions from './ControlledAccordions';
import { DialogProvider, DialogContext } from '../../middleware/DialogContext';
import PropTypes from 'prop-types';


const pages = ["Servicios", "Profesionales"];

function ResponsiveAppBar({ onLogin }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);
  const [nickname, setNickname] = useState(null);
  const { openDialog, dialogContent, handleDialogOpen, handleDialogClose } = useContext(DialogContext);

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
    setIsLoggedIn(true);
    setUserType(type);
    setNickname(userNickname);
    onLogin(userData); // Llama a la función onLogin pasada como prop
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    setNickname(null);
  };

  let settings = [];

  if (isLoggedIn) {
    if (userType === 'Empleador') {
      settings = [
        {
          name: 'Editar perfil',
          component: (
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Editar perfil</Typography>
            </MenuItem>
          ),
        },
        {
          name: 'Estado de solicitudes',
          component: (
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Estado de solicitudes</Typography>
            </MenuItem>
          ),
        },
        {
          name: 'Estado de servicios',
          component: (
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Estado de servicios</Typography>
            </MenuItem>
          ),
        },
        {
          name: 'Registro de servicios',
          component: (
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Registro de servicios</Typography>
            </MenuItem>
          ),
        },
        {
          name: 'Cerrar sesión',
          component: (
            <MenuItem
              onClick={() => {
                handleCloseUserMenu();
                handleLogout();
              }}
            >
              <Typography textAlign="center">Cerrar sesión</Typography>
            </MenuItem>
          ),
        },
      ];
    } else if (userType === 'Profesional') {
      settings = [
        {
          name: 'Editar perfil',
          component: (
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Editar perfil</Typography>
            </MenuItem>
          ),
        },
        {
          name: 'Servicios',
          component: (
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Servicios</Typography>
            </MenuItem>
          ),
        },
        {
          name: 'Historial proyectos',
          component: (
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Historial proyectos</Typography>
            </MenuItem>
          ),
        },
        {
          name: 'Cerrar sesión',
          component: (
            <MenuItem
              onClick={() => {
                handleCloseUserMenu();
                handleLogout();
              }}
            >
              <Typography textAlign="center">Cerrar sesión</Typography>
            </MenuItem>
          ),
        },
      ];
    }
  } else {
    settings = [
      {
        name: 'Registrarse',
        component: (
          <MenuItem onClick={() => handleDialogOpen(<Register />)}>
            <Typography textAlign="center">Registrarse</Typography>
          </MenuItem>
        ),
      },
      {
        name: 'Iniciar sesión',
        component: (
          <MenuItem
            onClick={() => handleDialogOpen(<Login onLogin={handleLogin} />)}
          >
            <Typography textAlign="center">Iniciar sesión</Typography>
          </MenuItem>
        ),
      },
    ];
  }

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
    >
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: { xs: '1rem', md: '1.5rem' },
            }}
          >
            PROFESIONALES
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: { xs: '1rem', md: '1.5rem' },
            }}
          >
            PROFESIONALES
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={nickname || ''} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <React.Fragment key={setting.name}>
                  {setting.component}
                </React.Fragment>
              ))}
            </Menu>
          </Box>
        </Toolbar>
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