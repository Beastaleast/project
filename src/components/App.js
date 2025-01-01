import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Button />
        <div className="content">
          <Routes>
            <Route path="/slyer" element={<Flyer />} />
            <Route path="/client" element={<Cleints_Dashboard />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/ecommerce" element={<E_Cards1 />} />
            <Route path="/food_item" element={<Food_Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/home" element={<Cards />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
