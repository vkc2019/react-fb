import { FaCircleNotch, FaCommentAlt, FaEllipsisV, FaUserAlt, FaUserSecret } from "react-icons/fa";

export default function ProfileOptionHeader() {
  return (
    <div className="wa-profile-options">
      <FaUserAlt className="user-icon"/>
      <div className="wa-profile-options__options">
        <FaUserSecret />
        <FaCircleNotch />
        <FaCommentAlt />
        <FaEllipsisV />
      </div>
    </div>
  );
}
