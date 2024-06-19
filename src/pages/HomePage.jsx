import Container from "@mui/material/Container";
import AvatarCarrousel from "../components/main/carrouselAvatar/AvatarCarrousel.jsx";
import ButtonsSections from "../components/main/ButtonsSections.jsx";
import Slider from "../components/main/slider/Slider.jsx";
import EngagementSection from "../components/main/EngagementSection.jsx";
import ControlledAccordions from "../components/main/ControlledAccordions.jsx";

const HomePage = () => {
  return (
    <Container>
      <Slider />
      <EngagementSection />
      <ButtonsSections />
      <ControlledAccordions />
      <AvatarCarrousel />
    </Container>
  );
};

export default HomePage;
