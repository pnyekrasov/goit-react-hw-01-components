import { Profile } from "./Social_network_profile/Profile";
import { Statistics } from "./Statistics_section/Statistics";
import { FriendList } from "./Friends_list/FriendList";
import { TransactionHistory } from "./Transaction_history/TransactionHistory";
import { GlobalStyle } from "./GlobalStyle";
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json'




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
