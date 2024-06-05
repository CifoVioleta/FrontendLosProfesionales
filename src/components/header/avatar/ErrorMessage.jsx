import { Typography } from "@mui/material";

const ErrorMessage = ({ message }) => {
  return (
    <Typography variant="caption" color="error">
      {message}
    </Typography>
  );
};

export default ErrorMessage;