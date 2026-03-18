import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            airbnb
          </Link>
        </div>
        <div className="nav-half">
          <h5>
            <Link to="/">Home</Link>
          </h5>
          <h5>
            <Link to="/login">Login</Link>
          </h5>
          <h5>
            <Link to="/add">Add</Link>
          </h5>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
