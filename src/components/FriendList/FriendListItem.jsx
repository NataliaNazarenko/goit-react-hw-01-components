import PropTypes from 'prop-types';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span className={isOnline ? 'status online' : 'status offline'}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
