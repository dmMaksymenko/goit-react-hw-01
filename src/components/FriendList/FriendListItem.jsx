function FriendListItem({ avatar, name, isOnline }) {
  // console.log(avatar);
  // console.log(name);
  // console.log(isOnline);
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

export default FriendListItem;
