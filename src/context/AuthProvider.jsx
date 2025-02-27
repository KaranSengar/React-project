import { createContext, useEffect, useState } from "react";
import { getlocalStorage, setlocalStorage } from "../utills/localstorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setuserdata] = useState({}); // ✅ Empty object se initialize kiya

  useEffect(() => {
    setlocalStorage();
    const { employees, admin } = getlocalStorage();
    setuserdata({ employees, admin }); // ✅ Correct setState usage
  }, []);
  return (
    <AuthContext.Provider value={{ userdata, setuserdata }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
