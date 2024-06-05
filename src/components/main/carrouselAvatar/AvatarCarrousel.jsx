import Slider from "react-slick";
import { Box } from "@mui/material";
import AvatarCard from "./AvatarCard.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const fakeData = [
  {
    avatarUrl: "https://example.com/avatar1.jpg",
    serviceName: "Frontend Development",
    professionalName: "Jane Doe",
    reviewText: "Great service!",
    rating: 3,
  },
  {
    avatarUrl: "https://example.com/avatar2.jpg",
    serviceName: "Backend Development",
    professionalName: "John Smith",
    reviewText: "Excellent work!",
    rating: 5,
  },
  {
    avatarUrl: "https://example.com/avatar3.jpg",
    serviceName: "DevOps Engineering",
    professionalName: "Alice Johnson",
    reviewText: "Very reliable!",
    rating: 4,
  },
];

const AvatarCarrousel = () => {
  return (
    <Box sx={{ padding: "50px 0" }}> {/* Increased padding for more space */}
      <Slider {...settings}>
        {fakeData.map((service, index) => (
          <Box key={index} sx={{ padding: "0 10px" }}>
            <AvatarCard {...service} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default AvatarCarrousel;