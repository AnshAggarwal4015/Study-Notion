import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
