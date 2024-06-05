import { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import ErrorMessage from "./ErrorMessage.jsx";
import FieldValidator from "./FieldValidator.jsx";

const theme = createTheme();

export default function Register() {
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    dni: "",
    password: "",
    verifyPassword: "",
    companyName: "",
    cif: "",
    serviceType: "",
    serviceName: "",
    serviceDescription: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    setFormData({
      ...formData,
      companyName: "",
      cif: "",
      serviceType: "",
      serviceName: "",
      serviceDescription: "",
    });
    setErrors({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.nombre) errors.nombre = "El nombre es requerido";
    if (!data.apellidos) errors.apellidos = "Los apellidos son requeridos";
    if (!data.email) errors.email = "El correo electrónico es requerido";
    if (!data.telefono) errors.telefono = "El teléfono es requerido";
    if (!data.dni) errors.dni = "El DNI o NIE es requerido";
    if (!data.password) errors.password = "La contraseña es requerida";
    if (data.password !== data.verifyPassword)
      errors.verifyPassword = "Las contraseñas no coinciden";

    if (userType === "Empleador") {
      if (!data.companyName)
        errors.companyName = "El nombre de la empresa es requerido";
      if (!data.cif) errors.cif = "El CIF es requerido";
    } else if (userType === "Profesional") {
      if (!data.serviceType)
        errors.serviceType = "El tipo de servicio es requerido";
      if (!data.serviceName)
        errors.serviceName = "El nombre del servicio es requerido";
      if (!data.serviceDescription)
        errors.serviceDescription = "La descripción del servicio es requerida";
      if (!data.companyName)
        errors.companyName = "El nombre de la empresa es requerido";
      if (!data.cif) errors.cif = "El CIF es requerido";
    }

    return errors;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrarse
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel id="user-type-label">Tipo de Usuario</InputLabel>
              <Select
                labelId="user-type-label"
                id="userType"
                value={userType}
                label="Tipo de Usuario"
                onChange={handleUserTypeChange}
                fullWidth
                sx={{ minWidth: "200px" }}
              >
                <MenuItem value="Empleador">Empleador</MenuItem>
                <MenuItem value="Profesional">Profesional</MenuItem>
              </Select>
            </FormControl>
            {userType && (
              <>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={12}>
                    <FieldValidator
                      error={!!errors.nombre}
                      helperText={errors.nombre}
                      required
                      fullWidth
                      id="nombre"
                      label="Nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FieldValidator
                      error={!!errors.apellidos}
                      helperText={errors.apellidos}
                      required
                      fullWidth
                      id="apellidos"
                      label="Apellidos"
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FieldValidator
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                      fullWidth
                      id="email"
                      label="Correo Electrónico"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FieldValidator
                      error={!!errors.telefono}
                      helperText={errors.telefono}
                      required
                      fullWidth
                      id="telefono"
                      label="Teléfono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FieldValidator
                      error={!!errors.dni}
                      helperText={errors.dni}
                      required
                      fullWidth
                      id="dni"
                      label="DNI o NIE"
                      name="dni"
                      value={formData.dni}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FieldValidator
                      error={!!errors.password}
                      helperText={errors.password}
                      required
                      fullWidth
                      name="password"
                      label="Contraseña"
                      type="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FieldValidator
                      error={!!errors.verifyPassword}
                      helperText={errors.verifyPassword}
                      required
                      fullWidth
                      name="verifyPassword"
                      label="Verificar Contraseña"
                      type="password"
                      id="verifyPassword"
                      value={formData.verifyPassword}
                      onChange={handleChange}
                    />
                  </Grid>
                  {userType === "Empleador" && (
                    <>
                      <Grid item xs={12}>
                        <FieldValidator
                          error={!!errors.companyName}
                          helperText={errors.companyName}
                          fullWidth
                          id="companyName"
                          label="Nombre de la Empresa"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FieldValidator
                          error={!!errors.cif}
                          helperText={errors.cif}
                          fullWidth
                          id="cif"
                          label="CIF"
                          name="cif"
                          value={formData.cif}
                          onChange={handleChange}
                        />
                      </Grid>
                    </>
                  )}
                  {userType === "Profesional" && (
                    <>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <InputLabel id="service-type-label">
                            Tipo de Servicio
                          </InputLabel>
                          <Select
                            labelId="service-type-label"
                            id="serviceType"
                            value={formData.serviceType}
                            label="Tipo de Servicio"
                            onChange={handleChange}
                            name="serviceType"
                            fullWidth
                          >
                            <MenuItem value="Frontend">Frontend</MenuItem>
                            <MenuItem value="Backend">Backend</MenuItem>
                            <MenuItem value="Devops">Devops</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FieldValidator
                          error={!!errors.serviceName}
                          helperText={errors.serviceName}
                          required
                          fullWidth
                          id="serviceName"
                          label="Nombre del Servicio"
                          name="serviceName"
                          value={formData.serviceName}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FieldValidator
                          error={!!errors.serviceDescription}
                          helperText={errors.serviceDescription}
                          required
                          fullWidth
                          id="serviceDescription"
                          label="Descripción del Servicio"
                          name="serviceDescription"
                          value={formData.serviceDescription}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FieldValidator
                          error={!!errors.companyName}
                          helperText={errors.companyName}
                          fullWidth
                          id="companyName"
                          label="Nombre de la Empresa"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FieldValidator
                          error={!!errors.cif}
                          helperText={errors.cif}
                          fullWidth
                          id="cif"
                          label="CIF"
                          name="cif"
                          value={formData.cif}
                          onChange={handleChange}
                        />
                      </Grid>
                    </>
                  )}
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Registrarse
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
