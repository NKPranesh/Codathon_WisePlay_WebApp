import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrimaryGame from "./Containers/PrimaryGame";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrimaryGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
