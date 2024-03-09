import css from "./Profile.module.css";
function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileBox}>
      <div className={css.avatarBox}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.statsList}>
        {Object.entries(stats).map(([label, value]) => (
          <li className={css.statsListItem} key={label}>
            <span>{label}</span>
            <span> {value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
