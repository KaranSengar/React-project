import React, { useState, useEffect } from "react";

const Header = (props) => {
  const { logindata, changeuser } = props; // ✅ Props ke through liya
  const [username, setUsername] = useState("Admin");

  useEffect(() => {
    if (logindata) {
      setUsername(logindata.firstName);
    } else {
      setUsername("Admin");
    }
  }, [logindata]);

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    changeuser(null); // ✅ Props ke through function call
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-4xl font-semibold">{username}</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 text-white px-5 py-2 rounded-md text-lg font-medium"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
