import { FaMicrophone, FaSmileWink, FaUpload } from "react-icons/fa";


export default function PostMessage() {
  return (
    <div className="wa-post-message">
      <FaSmileWink />
      <FaUpload />
      <input type="textarea" value="type a message" />
      <FaMicrophone />
    </div>
  );
}
