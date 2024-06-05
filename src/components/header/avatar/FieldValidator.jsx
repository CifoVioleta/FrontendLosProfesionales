import { TextField } from "@mui/material";

const FieldValidator = ({ error, helperText, ...props }) => {
  return (
    <TextField
      error={!!error}
      helperText={error ? helperText : null}
      {...props}
    />
  );
};

export default FieldValidator;
