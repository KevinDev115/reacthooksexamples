import React, { useContext } from "react";
import { UserContext } from "../pages/UseContextPage";

const UserAvatar = () => {
  const { avatar } = useContext(UserContext);

  return (
    <div className="container-user-avatar">
      <img src={avatar} alt="avatar" />
    </div>
  );
};

export default UserAvatar;
