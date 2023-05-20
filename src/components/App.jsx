import Profile from './ProfileCard/index.js';
import Statistics from './StatisticsData/index.js';
import FriendList from './FriendList/index.js';
import TransactionHistory from './TransactionHistory/index.js';
import { user } from './database/index.js';
import data from './database/data.json';
import friends from './database/friends.json';
import transactions from './database/transactions.json';
import '../index.css';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexWrap: 'wrap',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
