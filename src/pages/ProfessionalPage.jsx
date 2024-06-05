import NavTabs from "../components/header/NavTabs";
import Box from "@mui/material/Box";

function AuthNavTabs() {
  // Simula el tipo de usuario; puede ser 'empleador' o 'profesional'
  const userRole = "profesional";

  return (
    <Box sx={{ p: 2 }}>
      <NavTabs userRole={userRole} />
    </Box>
  );
}

export default AuthNavTabs;