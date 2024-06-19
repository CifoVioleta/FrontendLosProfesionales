import {
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import FieldValidator from "./avatar/FieldValidator.jsx";
import PropTypes from "prop-types";

const ServiceForm = ({ formData, handleChange, errors }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="service-type-label">Tipo de Servicio</InputLabel>
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
        <TextField
          error={!!errors.serviceDescription}
          helperText={errors.serviceDescription}
          required
          fullWidth
          id="serviceDescription"
          label="Descripción del Servicio"
          name="serviceDescription"
          value={formData.serviceDescription}
          onChange={handleChange}
          multiline
          rows={4}
        />
      </Grid>
    </Grid>
  );
};
ServiceForm.propTypes = {
  formData: PropTypes.shape({
    serviceType: PropTypes.string.isRequired,
    serviceName: PropTypes.string.isRequired,
    serviceDescription: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    serviceType: PropTypes.string,
    serviceName: PropTypes.string,
    serviceDescription: PropTypes.string,
  }).isRequired,
};

export default ServiceForm;
