import Navbar from "./components/Navbar";
import AddListing from "./pages/AddListing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="add-listing">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddListing />} />
      </Routes>
    </div>
  );
};

export default App;
