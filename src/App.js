import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrimaryGame from "./Containers/PrimaryGame";
import LandingPage from "./Containers/LandingPage";
import DashboardPage from "./Containers/DashboardPage";
import ResultPage from "./Containers/ResultPage2";
import LoginPage from "./Containers/LoginPage";
import SignupPage from "./Containers/SignupPage";
import SecondaryGame from "./Containers/SecondaryGame";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/primarygame" element={<PrimaryGame />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/resultpage" element={<ResultPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/secondarygame" element={<SecondaryGame/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
