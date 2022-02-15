import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrimaryGame from "./Containers/PrimaryGame";
import LandingPage from "./Containers/LandingPage";
import DashboardPage from "./Containers/DashboardPage";
import ResultPage from "./Containers/ResultPage2";
import LoginPage from "./Containers/LoginPage";
import SignupPage from "./Containers/SignupPage";
import SecondaryGame from "./Containers/SecondaryGame";
import Test from "./Containers/Test";
import "./App.css";
import { useState } from "react";
import Profile from "./components/profile";

function App() {
  let [testsData, setTestsData] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/primarygame" element={<PrimaryGame />} />
          <Route
            path="/dashboard"
            element={<DashboardPage testsData={testsData} />}
          />
          <Route path="/resultpage" element={<ResultPage />} />
          <Route
            path="/login"
            element={<LoginPage setTestsData={setTestsData} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/secondarygame" element={<SecondaryGame />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
