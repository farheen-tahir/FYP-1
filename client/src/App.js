import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";
import Donation from "./routes/Donation";
import Login from "./components/Login";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/news" element={<News />} />
        <Route path="/dashboard" element={<News />} />
        
      </Routes>
    </div>
  );
}

