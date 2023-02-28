import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";
import Donation from "./routes/Donation";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/donation" element={<Donation />} />
        {/* adding new route */}
      </Routes>
    </div>
  );
}

