import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendsList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile item={user} />
      <Statistics stats={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
