import { FriendListItem } from './FriendListItem.jsx';
import PropTypes from 'prop-types';
import cl from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={cl.friendList}>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend} />;
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
