import { Container, Box } from "@mui/material";
import RequestList from "./RequestList.jsx";

export default function RequestUserView() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
        }}
      >
        <RequestList />
      </Box>
    </Container>
  );
}