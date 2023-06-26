import React from "react";
import SearchUsers from "../SearchUsers";
import UserListing from "./UserListing";

function UserListLayout() {
  return (
    <>
      <div className="wa-us-list-layout">
        <SearchUsers />
        <div className="wa-user-list-layout">
          <UserListing />
        </div>
      </div>
    </>
  );
}

export default UserListLayout;
