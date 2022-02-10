import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrimaryGame from "./Containers/PrimaryGame";
import LandingPage from "./Containers/LandingPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/primarygame" element={<PrimaryGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
