import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from "./componnets/HomePage/HeroPage";
import HomePage from "./pages/homePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
