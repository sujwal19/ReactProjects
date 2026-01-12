import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 px-20 py-40 rounded-xl border-emerald-600">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
            type="email"
            placeholder="Enter your Email"
            className="bg-transparent outline-none placeholder:font-medium text-white  text-lg border-2 border-emerald-600 rounded-full px-8 py-2.5"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
            type="password"
            placeholder="Enter your Password"
            className="bg-transparent placeholder:font-medium text-white outline-none text-lg border-2 border-emerald-600 rounded-full px-8 py-2.5 mt-3"
          />
          <button className="bg-emerald-600 text-lg outline-none font-medium mt-7 w-full text-white border-none rounded-full px-8 py-2.5">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
