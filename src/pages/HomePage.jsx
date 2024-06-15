
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from '@mui/material/Container';
import AvatarCarrousel from "../components/main/carrouselAvatar/AvatarCarrousel.jsx";
import ButtonsSections from "../components/main/ButtonsSections.jsx";
import Slider from "../components/main/slider/Slider.jsx";
import EngagementSection from "../components/main/EngagementSection.jsx";
import ControlledAccordions from "../components/main/ControlledAccordions.jsx";
import { DialogProvider } from "../middleware/DialogContext.jsx";
import { UserProvider } from '../middleware/UserContext.jsx';

const HomePage = () => {
  return (
    <UserProvider>
        <DialogProvider>
        <Router>
            
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
            </Routes>
            </Container>
            
      </Router>
      </DialogProvider>    
    </UserProvider>
    
  );
};

export default HomePage;
