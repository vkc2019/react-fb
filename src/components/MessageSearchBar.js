import { FaEllipsisV, FaSearch, FaUserAlt } from "react-icons/fa";

export default function MessageSearchBar() {
  return (
    <div className="wa-msg-search">
      <FaUserAlt className="user-icon" />

      <div className="wa-msg-info">
        <p>Name</p>
        <p>Info</p>
      </div>
      <FaSearch className="search-icon-message" />
      <FaEllipsisV className="elipses-icon" />
    </div>
  );
}
