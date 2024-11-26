import Home1 from "./StatCard/Home1";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nutrition from "./NutritionDashboard/Nutrition";
import Cleints_Dashboard from "./ClientDashboard/Cleints_Dashboard";
import Food_Main from "./FoodItemAddition/Food_Main";
import E_Cards from "./ECommerce/E_Cards";
import Login from "./LogIn/Login";
import SinUP from "./SignUp/SinUP";
import Flyer from "./DataAddiiton/Flyer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home1 />} />
          <Route path="/Nutrition" element={<Nutrition />} />
          <Route path="/Client_Dashboard" element={<Cleints_Dashboard />} />
          <Route path="/Food_Item_Addition" element={<Food_Main />} />
          <Route path="/E-Commerce" element={<E_Cards />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SinUP />} />
          <Route path="/slyer" element={<Flyer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
