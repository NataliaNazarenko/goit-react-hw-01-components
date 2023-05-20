import PropTypes from 'prop-types';
import cl from './ProfileCard.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={cl.profileContainer}>
      <div className={cl.descriptionWrapper}>
        <img src={avatar} alt="User avatar" className={cl.avatarUser} />
        <p className={cl.nameUser}>{username}</p>
        <p className={cl.tagUser}>@{tag}</p>
        <p className={cl.locationUser}>{location}</p>
      </div>

      <ul className={cl.statsList}>
        <li className={cl.statsListLi}>
          <span className={cl.labelText}>Followers</span>
          <span className={cl.quantityNumber}>{stats.followers}</span>
        </li>
        <li className={cl.statsListLi}>
          <span className={cl.labelText}>Views</span>
          <span className={cl.quantityNumber}>{stats.views}</span>
        </li>
        <li className={cl.statsListLi}>
          <span className={cl.labelText}>Likes</span>
          <span className={cl.quantityNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
