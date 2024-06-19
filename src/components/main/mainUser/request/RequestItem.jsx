import { Box, Typography, Button, Avatar, Grid, Checkbox } from "@mui/material";
import PropTypes from "prop-types";

const estadoColors = {
  Pendiente: "#ff9800",
  Aprobado: "#4caf50",
  Rechazado: "#f44336",
  Eliminar: "#000000",
};

const RequestItem = ({
  profesional,
  servicio,
  fecha,
  estado,
  handleEliminarSolicitud,
}) => {
  return (
    <Box sx={{ border: "1px solid #ccc", borderRadius: 2, p: 2, mb: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={2} container justifyContent="center">
          <Avatar sx={{ width: 60, height: 60 }} />
          <Typography variant="body1" align="center">
            <strong>{profesional}</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
            <strong>{servicio}</strong>
          </Typography>
        </Grid>
        <Grid item xs={4} container justifyContent="flex-end">
          <Typography variant="body2" color="textSecondary">
            <strong>Fecha solicitud:</strong> {fecha}
          </Typography>
        </Grid>
        {estado !== "Eliminar" && (
          <Grid item>
            <Button
              variant="contained"
              sx={{ backgroundColor: estadoColors[estado] }}
              onClick={estado === "Pendiente" ? handleEliminarSolicitud : null}
            >
              {estado === "Pendiente" ? "Eliminar solicitud" : estado}
            </Button>
          </Grid>
        )}
        {estado === "Eliminar" && (
          <Grid item>
            <Checkbox color="primary" />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

RequestItem.propTypes = {
  profesional: PropTypes.string.isRequired,
  servicio: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  estado: PropTypes.string.isRequired,
  handleEliminarSolicitud: PropTypes.func.isRequired,
};

export default RequestItem;
