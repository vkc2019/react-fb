import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

function SearchUsers() {
  return (
    <div className="wa-use-search">
      <div className="search">
        <FaSearch className="search-icon" />
        <input placeholder="search or start new chat" />
      </div>

      <FaFilter />
    </div>
  );
}

export default SearchUsers;
