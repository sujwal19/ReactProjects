import { useState } from "react";

const Header = (props) => {
  // const [username, setUsername] = useState("");

  // if (!data) {
  //   setUsername("admin");
  // } else {
  //   setUsername(data.firstName);
  // }
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload();
    props.changeUser("");
  };

  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl font-medium">
        Hello, <br />
        <span className="text-3xl font-semibold">username 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="text-lg bg-red-600 text-white font-medium px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
