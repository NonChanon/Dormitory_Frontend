import { Routes, Route } from "react-router-dom";
import { StickyNavbar } from "./components/StickyNavbar";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Meter from "./pages/Meter";
export default function App() {
  return (
    <>
      <StickyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meter" element={<Meter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
