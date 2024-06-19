import RequestList from "./RequestList.jsx";
import PropTypes from "prop-types";

const RequestUserView = ({ usuarioEsProfesional }) => {
  const requests = [
    {
      id: 1,
      profesional: "John Doe",
      servicio: "Desarrollo Web",
      fecha: "2023-06-01",
      estado: "pendientes",
    },
    {
      id: 2,
      profesional: "Jane Smith",
      servicio: "Diseño Gráfico",
      fecha: "2023-06-10",
      estado: "aprobadas",
    },
    {
      id: 3,
      profesional: "Carlos Ruiz",
      servicio: "Consultoría IT",
      fecha: "2023-06-15",
      estado: "rechazadas",
    },
  ];

  return (
    <RequestList
      requests={requests}
      usuarioEsProfesional={usuarioEsProfesional}
    />
  );
};
RequestUserView.propTypes = {
  usuarioEsProfesional: PropTypes.bool.isRequired,
};

export default RequestUserView;
