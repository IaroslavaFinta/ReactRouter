import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import Yellow from "./Yellow"
import Brown from "./Brown"
import Green from "./Green"

export default function MainSection() {
    return (
        <div id="main-section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blue" element={<Blue />} />
              <Route path="/red" element={<Red />} />
              <Route path="/yellow" element={<Yellow />} />
              <Route path="/brown" element={<Brown />} />
              <Route path="/green" element={<Green />} />
            </Routes>
        </div>
    )
}