import React, { useState, useEffect, useContext } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  Box,
  Avatar,
  Dialog,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { DialogContext } from "../../../../middleware/DialogContext.jsx";
import Login from "../../../header/avatar/Login.jsx";
import PropTypes from "prop-types";

const ServiceList = ({ isLoggedIn, userType }) => {
  const [services, setServices] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("Todos");
  const [sortedServices, setSortedServices] = useState([]);
  const { openDialog, dialogContent, handleDialogOpen, handleDialogClose } = useContext(DialogContext);

  useEffect(() => {
    // Fetch services from the backend
    axios.get("/api/services")
      .then(response => {
        setServices(response.data);
        setSortedServices(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    filterAndSortServices(event.target.value, filter);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    filterAndSortServices(searchQuery, event.target.value);
  };

  const filterAndSortServices = (query, filter) => {
    let filteredServices = services.filter(service =>
      service.serviceName.toLowerCase().includes(query.toLowerCase()) &&
      (filter === "Todos" || service.serviceType === filter)
    );

    // Group by professional and sort by name
    filteredServices.sort((a, b) => a.professionalName.localeCompare(b.professionalName));
    setSortedServices(filteredServices);
  };

  const getButtonLabel = () => {
    if (!isLoggedIn) return "Contratar servicio";
    if (isLoggedIn && userType === "Empleador") return "Contratar servicio";
    if (userType === "Profesional") return null;
  };

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <TextField
          label="Buscar Servicio"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearch}
        />
        <Select
          value={filter}
          onChange={handleFilterChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="Todos">Todas</MenuItem>
          <MenuItem value="Frontend">Frontend</MenuItem>
          <MenuItem value="Backend">Backend</MenuItem>
          <MenuItem value="DevOps">DevOps</MenuItem>
        </Select>
      </Box>
      {sortedServices.map((service, index) => (
        <Accordion
          key={service.id}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mr: 2 }}>
                <Avatar alt={service.professionalName} src={service.avatar} sx={{ mb: 1 }} />
                <Typography sx={{ color: "text.secondary" }}>{service.professionalName}</Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ flexShrink: 0 }}>{service.serviceName}</Typography>
              </Box>
              <Button variant="outlined" sx={{ width: "100px" }}>{service.serviceType}</Button>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{service.description}</Typography>
            {getButtonLabel() && (
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={!isLoggedIn ? () => handleDialogOpen(<Login />) : undefined}
              >
                {getButtonLabel()}
              </Button>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="xs" fullWidth>
        <DialogContent>{dialogContent}</DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

ServiceList.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userType: PropTypes.string.isRequired,
};

export default ServiceList;