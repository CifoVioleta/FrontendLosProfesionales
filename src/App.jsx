
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from '@mui/material/Container';
import ResponsiveAppBar from "./components/header/ResponsiveAppBar.jsx";
import AvatarCarrousel from "./components/main/carrouselAvatar/AvatarCarrousel.jsx";
import ButtonsSections from "./components/main/ButtonsSections.jsx";
import Slider from "./components/main/slider/Slider.jsx";
import EngagementSection from "./components/main/EngagementSection.jsx";
import Footer from "./components/footer/Footer.jsx";
import ControlledAccordions from "./components/main/ControlledAccordions.jsx";

import { DialogProvider } from "./middleware/DialogContext.jsx";

const App = () => {
  return (
    <Router>
      <DialogProvider>
      <ResponsiveAppBar />
      <Container>
      <Routes>
      <Route path="/" element={
            <>
              <Slider/>
              <EngagementSection />
              <ButtonsSections />
              <ControlledAccordions/>
              <AvatarCarrousel />
            </>
          } />
          {/* Agrega más rutas para diferentes páginas */}
        </Routes>
      </Container>
      </DialogProvider>
      <Footer />
    </Router>
  );
};

export default App;
