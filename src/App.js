import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrimaryGame from "./Containers/PrimaryGame";
import LandingPage from "./Containers/LandingPage";
import "./App.css";
import DashboardPage from "./Containers/DashboardPage";
import ResultPage from "./Containers/ResultPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/primarygame" element={<PrimaryGame />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/resultpage" element={<ResultPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
