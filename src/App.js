import "./Newhead.css";

import "./Button.css";

import Home1 from "./Home1";

import "./Cards.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nutrition from "./Nutrition";
import Cleints_Dashboard from "./Cleints_Dashboard";
import Food_Main from "./Food_Main";
import E_Cards from "./E_Cards";
import Login from "./Login";
import SinUP from "./SinUP";
import "./Login1.css";
import "./SinUp1.css";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
