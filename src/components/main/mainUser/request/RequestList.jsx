import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import RequestItem from "./RequestItem";

const requests = [
  {
    profesional: "Profesional 1",
    servicio: "Servicio",
    fecha: "30-02-2024",
    estado: "Rechazadas",
  },
  {
    profesional: "Profesional 2",
    servicio: "Servicio 1",
    fecha: "20-03-2024",
    estado: "Aceptadas",
  },
  {
    profesional: "Profesional 3",
    servicio: "Servicio 2",
    fecha: "20-05-2024",
    estado: "Pendiente",
  },
  // Agrega más solicitudes según sea necesario
];

export default function RequestList() {
  const [filter, setFilter] = useState("Todos");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredSolicitudes = requests.filter((solicitud) => {
    if (filter === "Todos") return true;
    return solicitud.estado === filter;
  });

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Servicios solicitados
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="filter-label">Filtrar</InputLabel>
        <Select
          labelId="filter-label"
          id="filter"
          value={filter}
          label="Filtrar"
          onChange={handleFilterChange}
        >
          <MenuItem value="Todos">Todos</MenuItem>
          <MenuItem value="Aceptadas">Aceptadas</MenuItem>
          <MenuItem value="Rechazadas">Rechazadas</MenuItem>
          <MenuItem value="Pendiente">Pendientes de aprobación</MenuItem>
        </Select>
      </FormControl>
      {filteredSolicitudes.map((solicitud, index) => {
        return (
          <RequestItem
            key={index}
            profesional={solicitud.profesional}
            servicio={solicitud.servicio}
            fecha={solicitud.fecha}
            estado={solicitud.estado}
            usuarioEsProfesional={true} // Aquí ajusta según tu lógica de autenticación
          />
        );
      })}
    </Box>
  );
}
