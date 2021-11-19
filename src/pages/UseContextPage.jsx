import React, { createContext, useContext } from "react";
import UserAvatar from "../components/UserAvatar";
import UserName from "../components/UserName";

export const UserContext = createContext();

const UseContextPage = () => {
  const user = {
    name: "John",
    lastName: "Doe",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU",
  };

  return (
    <div className="site-layout-content">
      <h2 className="title-page">UseContext</h2>
      <UserContext.Provider value={user}>
        <UserAvatar />
        <UserName />
      </UserContext.Provider>
    </div>
  );
};

export default UseContextPage;
