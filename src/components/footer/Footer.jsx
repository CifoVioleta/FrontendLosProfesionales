
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.grey[900],
        color: theme.palette.common.white,
        p: { xs: 3, md: 6 },
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Acerca de
          </Typography>
          <Typography variant="body2">
            Somos una plataforma dedicada a conectar profesionales con empleadores, brindando soluciones efectivas para el desarrollo de proyectos.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Contacto
          </Typography>
          <Typography variant="body2">
            Email: info@profesionales.com
            <br />
            Teléfono: +1 (234) 567-890
            <br />
            Dirección: Calle Falsa 123, Ciudad, País
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Enlaces
          </Typography>
          <Link href="#" color="inherit" variant="body2" display="block">
            Inicio
          </Link>
          <Link href="#" color="inherit" variant="body2" display="block">
            Servicios
          </Link>
          <Link href="#" color="inherit" variant="body2" display="block">
            Profesionales
          </Link>
          <Link href="#" color="inherit" variant="body2" display="block">
            Contacto
          </Link>
        </Grid>
      </Grid>
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} Profesionales. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;