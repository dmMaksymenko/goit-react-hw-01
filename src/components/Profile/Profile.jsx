import css from "./Profile.module.css";
function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileBox}>
      <div className={css.avatarBox}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.bold}>{name}</p>
        <p className={css.greyText}>@{tag}</p>
        <p className={css.greyText}>{location}</p>
      </div>
      <ul className={css.statsList}>
        {Object.entries(stats).map(([label, value]) => (
          <li className={css.statsListItem} key={label}>
            <span>{label}</span>
            <span className={css.bold}> {value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
