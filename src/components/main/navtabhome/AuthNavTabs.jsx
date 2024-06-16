import { useState } from "react";
import Box from "@mui/material/Box";
import BreadcrumbsComponent from "./BreadcrumbsComponent.jsx";
import NavTabs from "./NavTabs.jsx";

function AuthNavTabs({ userType }) {
  const [currentTab, setCurrentTab] = useState("1");
  const [submenuValue, setSubmenuValue] = useState("Todos"); // Estado del submenú

  return (
    <Box sx={{ p: 2 }}>
      <BreadcrumbsComponent currentTab={currentTab} submenuValue={submenuValue} />
      <NavTabs userRole={userType} setCurrentTab={setCurrentTab} setSubmenuValue={setSubmenuValue} />
    </Box>
  );
}


export default AuthNavTabs;