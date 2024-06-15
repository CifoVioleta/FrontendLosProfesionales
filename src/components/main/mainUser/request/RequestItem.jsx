import { Box, Typography, Button, Avatar, Grid, Checkbox } from "@mui/material";

export default function RequestItem({
  profesional,
  servicio,
  fecha,
  estado,
  usuarioEsProfesional,
}) {
  const estadoColors = {
    Aceptadas: "green",
    Rechazadas: "magenta",
    Pendiente: "blue",
    Eliminar: "red",
  };

  const handleEliminarSolicitud = () => {
    // Lógica para eliminar solicitud
  };

  const handleAceptarSolicitud = () => {
    // Lógica para aceptar solicitud
  };

  const handleRechazarSolicitud = () => {
    // Lógica para rechazar solicitud
  };

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
}
