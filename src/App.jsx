
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from '@mui/material/Container';
import ResponsiveAppBar from "./components/header/ResponsiveAppBar.jsx";
import Footer from "./components/footer/Footer.jsx";
import { UserProvider } from './middleware/UserContext.jsx';
import { DialogProvider } from './middleware/DialogContext.jsx';
import HomePage from "./pages/HomePage.jsx";

const App = () => {
  return (
    <UserProvider>
      <DialogProvider>
        <Router>
            <ResponsiveAppBar />
            <Container>
            <Routes>
            <Route path="/" element={
                    <>
                    <HomePage/>
                    </>
                } />
            </Routes>
            </Container>
            <Footer />
        </Router>
      </DialogProvider>    
    </UserProvider>
  );
}

export default App;
