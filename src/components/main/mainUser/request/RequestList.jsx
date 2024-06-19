import { useState } from "react";
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Grid,
} from "@mui/material";
import PropTypes from "prop-types";
import RequestItem from "./RequestItem.jsx";

const estadoLabels = {
  todas: "Solicitudes",
  pendientes: "Solicitudes Pendientes",
  aprobadas: "Solicitudes Aprobadas",
  rechazadas: "Solicitudes Rechazadas",
};

const RequestList = ({ requests, usuarioEsProfesional }) => {
  const [filtro, setFiltro] = useState("todas");

  const filteredRequests = requests.filter((request) => {
    if (filtro === "todas") return true;
    return request.estado === filtro;
  });

  const handleEliminarSolicitud = (id) => {
    // Función para manejar la eliminación de la solicitud
    console.log(`Eliminar solicitud con ID: ${id}`);
  };

  return (
    <Box>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 5 }}
      >
        <Grid item>
          <Typography variant="h6">{estadoLabels[filtro]}</Typography>
        </Grid>
        <Grid item>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="filtro-label">Filtrar por estado</InputLabel>
            <Select
              labelId="filtro-label"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              label="Filtrar por estado"
            >
              <MenuItem value="todas">Todas</MenuItem>
              <MenuItem value="pendientes">Pendientes</MenuItem>
              <MenuItem value="aprobadas">Aprobadas</MenuItem>
              <MenuItem value="rechazadas">Rechazadas</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        {filteredRequests.map((request, index) => (
          <RequestItem
            key={index}
            {...request}
            handleEliminarSolicitud={() => handleEliminarSolicitud(request.id)}
          />
        ))}
      </Box>
    </Box>
  );
};

RequestList.propTypes = {
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      profesional: PropTypes.string.isRequired,
      servicio: PropTypes.string.isRequired,
      fecha: PropTypes.string.isRequired,
      estado: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  usuarioEsProfesional: PropTypes.bool.isRequired,
};

export default RequestList;
