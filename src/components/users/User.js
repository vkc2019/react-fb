import React from "react";
import { FaUserAlt } from "react-icons/fa";

function User({ user }) {
  return (
    <div className="wa-user">
      <div className="wa-user__image">
        <FaUserAlt className="user-icon" />
      </div>
      <div className="wa-user__title">
        <p>{user.name}</p>
        <p>{user.lastMessage}</p>
      </div>
      <div className="wa-user__lastseen">
        <p>{user.lastSeenOn}</p>
      </div>
    </div>
  );
}

export default User;
