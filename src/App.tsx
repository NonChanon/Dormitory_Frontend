import { Routes, Route } from "react-router-dom";
import { StickyNavbar } from "./components/StickyNavbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <StickyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
