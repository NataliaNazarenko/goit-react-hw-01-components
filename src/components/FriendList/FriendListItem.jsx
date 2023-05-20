import PropTypes from 'prop-types';
import cl from './FriendList.module.css';

export function FriendListItem({ avatar, name, isOnline }) {
  const statusClassName = isOnline ? cl.online : cl.offline;
  return (
    <li className={cl.itemList}>
      <span className={`${cl.statusList} ${statusClassName}`}></span>
      <img className={cl.avatarImg} src={avatar} alt="User avatar" width="48" />
      <p className={cl.nameText}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
