import React from "react";
import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout.js";

const Logout = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <CiLogout className="w-7 h-7 text-white  hover:text-red-600  cursor-pointer" onClick={logout}/>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default Logout;
