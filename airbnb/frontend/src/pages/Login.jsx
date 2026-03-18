import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = loginInfo;

    if (!email || !password) {
      return console.log("Bad Field");
    }

    try {
      const url = "http://localhost:5000/api/auth/login";
      const response = await axios.post(url, loginInfo);
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
      console.log(response.data);
      navigate("/");
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div>
      <br />
      <Link>Back to Home</Link>
      <br />
      <br />
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          onChange={inputHandler}
          value={loginInfo.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={inputHandler}
          value={loginInfo.password}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
