import { useState } from "react";
import Box from "@mui/material/Box";
import BreadcrumbsComponent from "./BreadcrumbsComponent";
import NavTabs from "./NavTabs";

function AuthNavTabs() {
  const userRole = "profesional"; // Simula el tipo de usuario; puede ser 'empleador' o 'profesional'
  const [currentTab, setCurrentTab] = useState("1");
  const [submenuValue, setSubmenuValue] = useState("Todos"); // Estado del submenú

  return (
    <Box sx={{ p: 2 }}>
      <BreadcrumbsComponent currentTab={currentTab} submenuValue={submenuValue} />
      {/* Añade submenuValue aquí */}
      <NavTabs userRole={userRole} setCurrentTab={setCurrentTab} setSubmenuValue={setSubmenuValue} />
    </Box>
  );
}

export default AuthNavTabs;