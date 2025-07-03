import About from "./About";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Home";
import Contact_Us from "./Contact_Us";
import Menu from "./Menu";

function MyApp() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Products />} />
        <Route path="/Contact" element={<Contact_Us />} />
      </Routes>
    </>
  );
}

export default MyApp;
