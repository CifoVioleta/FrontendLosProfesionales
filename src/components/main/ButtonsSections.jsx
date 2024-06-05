import { useState } from "react";
import { 
    Grid,
    Button,
    Box,
    styled,
 } from "@mui/material";

const CustomButton = styled(Button)(({ theme, selected }) => ({
  color: selected ? theme.palette.background.default : theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
  backgroundColor: selected ? theme.palette.primary.main : theme.palette.background.default,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const ButtonsSections = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <Box my={5}>
    <Grid container spacing={2} justifyContent="center" style={{ padding: "16px 0" }}>
      <Grid item xs={4}>
        <CustomButton
          fullWidth
          variant="outlined"
          selected={selectedButton === "Frontend"}
          onClick={() => handleButtonClick("Frontend")}
        >
          Frontend
        </CustomButton>
      </Grid>
      <Grid item xs={4}>
        <CustomButton
          fullWidth
          variant="outlined"
          selected={selectedButton === "Backend"}
          onClick={() => handleButtonClick("Backend")}
        >
          Backend
        </CustomButton>
      </Grid>
      <Grid item xs={4}>
        <CustomButton
          fullWidth
          variant="outlined"
          selected={selectedButton === "Devops"}
          onClick={() => handleButtonClick("Devops")}
        >
          Devops
        </CustomButton>
      </Grid>
    </Grid>
    </Box>
  );
};

export default ButtonsSections;