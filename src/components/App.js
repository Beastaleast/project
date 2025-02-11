import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";
import Button from "./Sidebar/Button";
import Header from "./Header/Newhead";
import Flyer from "./MainContent/DataAddiiton/Flyer";
import Cleints_Dashboard from "./MainContent/ClientDashboard/Cleints_Dashboard";
import Diet from "./MainContent/DietTeplate/Diet";
import E_Cards1 from "./MainContent/ECommerce/E_Cards1";
import Food_Main from "./MainContent/FoodItemAddition/Food_Main";
import Login from "./MainContent/LogIn/Login";
import Signup from "./MainContent/Reports/SignUp/SinUp1";
import Nutrition from "./MainContent/NutritionDashboard/Nutrition";
import Cards from "./MainContent/StatCard/Cards";

function App() {
  const isAuthenticated = useSelector((state) => state.authenticator.value);

  useEffect(() => {
    console.log("User Authenticated:", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <div className="app-container">
        {isAuthenticated && <Header />}
        {isAuthenticated && <Button />}
        <div className="content">
          <Routes>
            {!isAuthenticated ? (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            ) : (
              <>
                <Route path="/home" element={<Cards />} />
                <Route path="/flyer" element={<Flyer />} />
                <Route path="/client" element={<Cleints_Dashboard />} />
                <Route path="/diet" element={<Diet />} />
                <Route path="/ecommerce" element={<E_Cards1 />} />
                <Route path="/food_item" element={<Food_Main />} />
                <Route path="/nutrition" element={<Nutrition />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Navigate to="/home" />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
