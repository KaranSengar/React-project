import React, { useEffect, useState } from "react";
import EmployeeDeshboard from "./component/Deshboard/EmployeeDeshboard";
import AdminDeshboard from "./component/Deshboard/AdminDeshboard";
import Login from "./component/Auth/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const { userdata } = useContext(AuthContext);


  const [user, setuser] = useState(null);
  const [logindata, setlogindata] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setuser(loggedInUser.role);
      if (loggedInUser.role === "employee") {
        setlogindata(loggedInUser.data);
      }
    }
  }, [userdata]); // ✅ Fix: userdata change hone par bhi run hoga

  const handlelogin = (email, password) => {
    if (
      userdata &&
      userdata?.admin?.find((e) => e.email === email && e.password === password)
    ) {
      setuser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userdata) {
      const employee = userdata?.employees?.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setuser("employee"); // ✅ Fix: Ab correct value set hogi
        setlogindata(employee);

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <>
      {!user ? <Login handlelogin={handlelogin} /> : ""}
      {user === "admin" ? (
        <AdminDeshboard changeuser={setuser}/>
      ) : user === "employee" ? (
        <EmployeeDeshboard changeuser={setuser} logindata={logindata} />
      ) : null}
    </>
  );
};

export default App;
