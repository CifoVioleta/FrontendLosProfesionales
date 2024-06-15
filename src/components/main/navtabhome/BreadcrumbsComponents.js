import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import HomePage from "../../../pages/HomePage";

export default function BreadcrumbsComponent({ currentTab, submenuValue }) {
  const breadcrumbNameMap = {
    1: "Editar perfil",
    2: "Solicitudes",
    3: "Servicios",
    4: "Proyectos",
    5: "Historial",
  };

  return (
    <Box p={2}>
    <Breadcrumbs aria-label="breadcrumb">
    <Link underline="hover" color="inherit" href="/">
          <HomePage/>
        </Link>
        <Typography color="text.primary">
          {breadcrumbNameMap[currentTab]}
        </Typography>
        {currentTab === "3" && submenuValue && (
          <Typography color="text.primary">{submenuValue}</Typography>
        )}
    </Breadcrumbs>
    </Box>
  );
}

