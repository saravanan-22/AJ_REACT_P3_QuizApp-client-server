import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login/Login";
import SignUp from "./Auth/SignUp/SignUp";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import Home from "./Components/Home/Home";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import Gk from "./Components/Gk/Gk";
import Vehicles from "./Components/Vehicles/Vehicles";
import Politics from "./Components/Politics/Politics";
import Sports from "./Components/Sports/Sports";
import History from "./Components/History/History";
import Animals from "./Components/Animals/Animals";
import Points from "./Components/Point/Points";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="ResetPassword" element={<ResetPassword />} />
          <Route path="/GK" element={<Gk />} />
          <Route path="/Vehicles" element={<Vehicles />} />
          <Route path="/Politics" element={<Politics />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/History" element={<History />} />
          <Route path="/Animals" element={<Animals />} />
          <Route path="/Points" element={<Points/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
