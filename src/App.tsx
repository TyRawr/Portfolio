import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EarTraining from "./pages/EarTraining";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ear-training" element={<EarTraining />} />
    </Routes>
  );
}