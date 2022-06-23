import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Indonesia from "./pages/Indonesia";
import Provinces from "./pages/Provinces";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/indonesia" element={<Indonesia />} />
        <Route path="/provinsi" element={<Provinces />} />
        <Route path="*" element={<Home />} />
      </Routes>
  );
}

export default App;
