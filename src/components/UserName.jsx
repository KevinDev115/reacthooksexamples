import React, { useContext } from "react";
import { UserContext } from "../pages/UseContextPage";

const UserName = () => {
  const { name, lastName } = useContext(UserContext);
  return (
    <div className="container-user-name">
      <span
        color="processing"
        className="tag-user-name"
      >{`${name} ${lastName}`}</span>
    </div>
  );
};

export default UserName;
