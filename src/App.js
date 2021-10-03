import './App.css';
import Section from './Components/Section/Section';
import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistics/Statistics';
import FriendList from './Components/FriendList/FriendList';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <div>
      <Section title="Profile">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title="Statistics">
        <Statistics title="Upload stats" stats={statisticalData} />
      </Section>

      <Section title="FriendList">
        <FriendList friends={friends} />
      </Section>

      <Section title="Transaction History">
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}

export default App;
