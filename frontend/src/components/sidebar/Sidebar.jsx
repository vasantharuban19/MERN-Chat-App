import React from "react";
import SearchBox from "./SearchBox.jsx";
import Logout from "./Logout.jsx";
import Conversations from "./Conversations.jsx";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchBox />
      <div className="divider px-3"></div>
      <Conversations />
      <Logout />
    </div>
  );
};

export default Sidebar;
