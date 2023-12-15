import Login from "./pages/AuthPage/Login/Login";
import DriverRegister from "./pages/AuthPage/Register/DriverRegister";
import PassengerRegister from "./pages/AuthPage/Register/PassengerRegister";
import Landing from "./pages/LandingPage/LandingPage";
import DriverDashboard from "./pages/DriverDashboard/DriverDashboard";
import PassengerDashboard from "./pages/PassengerDashboard/PassengerDashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/index.css";
import "./styles/base.css";
import "./styles/color.css";
import Rides from "./components/Rides/Rides";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App flex column">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/driverRegister" element={<DriverRegister />} />
          <Route path="/passengerRegister" element={<PassengerRegister />} />
          <Route path="/driverDashboard/home" element={<DriverDashboard />} />
          <Route
            path="/passengerDashboard/home"
            element={<PassengerDashboard />}
          />
          <Route path="/passengerDashboard/rides" element={<Rides />} />
          <Route path="/driverDashboard/rides" element={<Rides />} />

          <Route path="/driverDashboard/profile" element={<Profile />} />
          <Route path="/passengerDashboard/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
