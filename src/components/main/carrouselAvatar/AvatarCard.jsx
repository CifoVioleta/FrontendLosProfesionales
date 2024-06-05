import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Rating,
} from "@mui/material";

const AvatarCard = ({
  avatarUrl,
  serviceName,
  professionalName,
  nickname,
  reviewText,
  rating,
}) => {
  return (
    <Card sx={{ maxWidth: 345, mx: "auto", border: "1px solid #ccc" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Avatar
          alt={professionalName}
          src={avatarUrl}
          sx={{ width: 100, height: 100 }}
        />
      </Box>
      <CardContent>
        <Typography variant="body1" align="center">
          {nickname}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" align="center">
          {serviceName}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {professionalName}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {reviewText}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Rating name="read-only" value={rating} readOnly />
        </Box>
      </CardContent>
    </Card>
  );
};

export default AvatarCard;
