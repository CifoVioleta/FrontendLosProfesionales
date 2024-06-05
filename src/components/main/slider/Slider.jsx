import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const images = [
  {
    label: "Si quieres contratar a profesionales del sector, aquí podrás encontrarlos.",
    imgPath: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    buttons: ["Frontend", "Backend", "Devops"],
  },
  {
    label: "Si quieres ofrecer tus servicios, aquí tienes la plataforma perfecta para hacerlos visibles.",
    imgPath: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    buttons: ["Ofrecer servicio"],
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "left",
        overflow: "hidden",
        maxHeight: "400px", // Ajusta la altura máxima del Slider
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          maxHeight: "100%", // Ajusta la altura máxima del Slider
        }}
      >
        <Box
          component="img"
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
          }}
          src={images[activeStep].imgPath}
          alt={images[activeStep].label}
        />
        <Grid
          container
          spacing={2}
          sx={{
            position: "absolute",
            bottom: 10,
            right: 10,
            color: "white",
            zIndex: 1,
            height: "100%",
          }}
        >
          <Grid
            item
            xs={10}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                padding: 2,
                fontSize: { xs: "1.5rem", md: "2.5rem" }, // Font size changes based on screen size
                textAlign: "left",
              }}
            >
              {images[activeStep].label}
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-end",
              height: "100%",
            }}
          >
            {images[activeStep].buttons.map((button, index) => (
              <Button
                key={index}
                variant="contained"
                color="primary"
                sx={{
                  width: "100%",
                  mb: 1,
                  fontSize: { xs: "0.75rem", md: "1rem" }, // Font size changes based on screen size
                }}
              >
                {button}
              </Button>
            ))}
          </Grid>
        </Grid>
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={maxSteps === 1}>
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={maxSteps === 1}>
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;