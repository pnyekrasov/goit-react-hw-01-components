import { Profile } from "./Social_network_profile/Profile";
import { Statistics } from "./Statistics_section/Statistics";
import user from './user.json';
import data from './data.json'

export const App = () => {
  return (
    <div>
      <Profile item={user} />
      <Statistics stats={data} />
    </div>
  );
};
