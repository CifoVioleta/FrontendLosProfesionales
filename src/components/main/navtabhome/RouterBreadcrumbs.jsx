import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink, useLocation } from "react-router-dom";

const breadcrumbNameMap = {
  "editar-perfil": "Editar perfil",
  "solicitudes": "Solicitudes",
  "servicios": "Servicios",
  "servicios/todos": "Todos",
  "servicios/activos": "Activos",
  "servicios/inactivos": "Inactivos",
  "servicios/nuevo": "Añadir servicio",
  "proyectos": "Proyectos",
  "historial": "Historial",
};

function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />;
}

function RouterBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[value] || value}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[value] || value}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}

export default RouterBreadcrumbs;
