import React, { useState } from "react";

const Login = ({ handlelogin }) => {
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    handlelogin(Email, password);
    setEmail("");
    setpassword("");
  };
  return (
    <>
      <div className="flex items-center justify-center mt-40 relative">
        <div className="border-2 border-emerald-600 p-20">
          <form
            onSubmit={(e) => {
              SubmitHandler(e);
            }}
            className="flex flex-col items-center justify-center"
          >
            <input
              required
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
              type="email"
              placeholder="Enter the Email"
            />
            <input
              required
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              className=" outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-3"
              type="password"
              placeholder="Enter the Password"
            />
            <button className="text-white outline-none border-2 bg-emerald-600 text-xl py-3 px-20 rounded-full placeholder:text-white mt-10">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
