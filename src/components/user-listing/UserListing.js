import User from "../users/User";
export default function UserListing() {
  const users = Array(50)
    .fill(0)
    .map((x) => {
      return {
        name: "Chandra Reddy",
        image: "https://www.gravatar.com/avatar/HASH",
        lastMessage: "Will do it",
        lastSeenOn: "13:12",
      };
    });
  return (
    <div className="wa-user-list">
      {users.map((x) => {
        return <User key={x.name} user={x} />;
      })}
    </div>
  );
}
