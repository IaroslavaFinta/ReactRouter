import { Routes, Route } from "react-router-dom";
import Blue from "./Components/Blue";
import Red from "./Components/Red";
import Home from "./Components/Home";

export default function MainSection() {
    return (
        <div id="main-section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blue" element={<Blue />} />
              <Route path="/red" element={<Red />} />
            </Routes>
        </div>
    )
}