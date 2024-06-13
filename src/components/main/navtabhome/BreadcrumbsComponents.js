import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const tabLabels = {
  "1": "Editar perfil",
  "2": "Solicitudes",
  "3": "Servicios",
  "4": "Proyectos",
  "5": "Historial",
};

function BreadcrumbsComponent({ currentTab, submenuValue }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" underline="hover">
        Home
      </Link>
      {currentTab === "3" ? (
        <>
          <Link color="inherit" href="/" underline="hover">
            Servicios
          </Link>
          <Typography color="textPrimary">{submenuValue}</Typography>
        </>
      ) : (
        <Typography color="textPrimary">{tabLabels[currentTab]}</Typography>
      )}
    </Breadcrumbs>
  );
}

export default BreadcrumbsComponent;