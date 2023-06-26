import MessageWindow from "./MessageWindow";
import PostMessage from "./PostMessage";

export default function MessageList() {
  return <div className="wa-message-list-holder">
    <MessageWindow />
    <PostMessage />
  </div>;
}
