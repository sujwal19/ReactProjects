import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { formatName } from "../utils/formatName";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully!");
    navigate("/login");
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="shadow-soft relative flex items-center justify-between bg-[#F3F4F6] px-6 py-4">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-[#4CA3DD]">
        🏠 StayEase
      </Link>

      {/* Hamburger for Mobile */}
      <button
        className="text-2xl text-[#111827] md:hidden"
        onClick={toggleMenu}
      >
        {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </button>

      {/* Links */}
      <div
        className={`absolute top-full left-0 w-full flex-col items-center gap-4 bg-white p-4 shadow transition-transform duration-300 md:static md:flex md:w-auto md:flex-row md:gap-6 md:bg-transparent md:p-0 md:shadow-none ${
          menuOpen ? "flex" : "hidden md:flex"
        }`}
      >
        <Link
          to="/"
          className="w-full font-semibold text-[#111827] hover:text-[#4CA3DD] md:w-auto"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        {token && user ? (
          <>
            <Link
              to="/add"
              className="w-full font-semibold text-[#111827] hover:text-[#4CA3DD] md:w-auto"
              onClick={() => setMenuOpen(false)}
            >
              Add Listing
            </Link>

            <span className="w-full font-semibold text-[#111827] md:w-auto">
              Hello, {formatName(user.name)}
            </span>

            <button
              onClick={handleLogout}
              className="w-full rounded-md bg-[#4CA3DD] px-4 py-2 font-semibold text-white hover:bg-[#3B8AC4] md:w-auto"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="w-full rounded-md bg-[#4CA3DD] px-4 py-2 font-semibold text-white hover:bg-[#3B8AC4] md:w-auto"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="w-full rounded-md bg-[#4CA3DD] px-4 py-2 font-semibold text-white hover:bg-[#3B8AC4] md:w-auto"
              onClick={() => setMenuOpen(false)}
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
