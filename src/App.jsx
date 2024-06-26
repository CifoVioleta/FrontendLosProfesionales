import { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/header/ResponsiveAppBar.jsx";
import Footer from "./components/footer/Footer.jsx";
import { UserProvider, UserContext } from "./middleware/UserContext.jsx";
import { DialogProvider } from "./middleware/DialogContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import UserPage from "./pages/UserPage.jsx";
import Login from "./components/header/avatar/Login.jsx";
import Register from "./components/header/avatar/Register.jsx";
import ServiceList from "./components/main/mainUser/services/ServiceList.jsx";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const { state } = useContext(UserContext);  // Usando el contexto para obtener el estado del usuario

  const handleLogin = (userType, nickname) => {
    console.log("User logged in:", userType, nickname);
    // Maneja el estado del usuario
  };

  return (
    <UserProvider>
      <DialogProvider>
        <Router>
          <ResponsiveAppBar onLogin={handleLogin} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServiceList isLoggedIn={state.isLoggedIn} userType={state.userType} />} />
            <Route path="/user/:tab" element={<UserPage />} />
            <Route path="/login" element={
                isLogin ? (
                  <Login onLogin={handleLogin}
                    switchToRegister={() => setIsLogin(false)}
                  />
                ) : (
                  <Register switchToLogin={() => setIsLogin(true)} />
                )
              }
            />
            
          </Routes>
          <Footer />
        </Router>
      </DialogProvider>
    </UserProvider>
  );
}

export default App;
