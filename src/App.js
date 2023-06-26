import "./App.css";
import MessageSearchBar from "./components/MessageSearchBar";
import ProfileOptionHeader from "./components/ProfileOptionHeader";
import MessageList from "./components/message-list/MessageList";
import UserListLayout from "./components/user-listing/UserListLayout";

function App() {
  return (
    <div className="wa-layout">
      <ProfileOptionHeader className="wa-profile-options" />
      <MessageSearchBar className="wa-message-search" />
      <UserListLayout className="wa-users" />
      <MessageList className="wa-message-details" />
    </div>
  );
}

export default App;
