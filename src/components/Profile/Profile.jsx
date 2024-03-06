import "./Profile.module.css";
function Profile({ name, tag, location, image, stats }) {
  return (
    <div className="profile-box">
      <div>
        <img className="avatar" src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        {Object.entries(stats).map(([label, value]) => (
          <li key={label}>
            <span>{label}</span>
            <span> {value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
