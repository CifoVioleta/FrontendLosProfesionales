import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/header/ResponsiveAppBar.jsx";
import Footer from "./components/footer/Footer.jsx";
import { UserProvider } from "./middleware/UserContext.jsx";
import { DialogProvider } from "./middleware/DialogContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import UserPage from "./pages/UserPage.jsx";

// Define la función onLogin
const handleLogin = (userData) => {
  console.log("User logged in", userData);
};

function App() {
  return (
    <UserProvider>
      <DialogProvider>
        <Router>
          <ResponsiveAppBar onLogin={handleLogin} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/:tab" element={<UserPage />} />
          </Routes>
          <Footer />
        </Router>
      </DialogProvider>
    </UserProvider>
  );
}

export default App;
