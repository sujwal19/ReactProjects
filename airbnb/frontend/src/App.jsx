import Navbar from "./components/Navbar";
import AddListing from "./pages/AddListing";
import EditListing from "./pages/EditListing";
import Home from "./pages/Home";
import ListingDetails from "./pages/ListingDetails";
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
        <Route path="listing/:id" element={<ListingDetails />} />
        <Route path="listing/:id/edit" element={<EditListing />} />
      </Routes>
    </div>
  );
};

export default App;
