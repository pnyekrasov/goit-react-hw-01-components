import { Card, Border, User, Table } from "./Profile.styled";

export const Profile = ({ item }) => {
   const { avatar, location, stats, tag, username } = item;
    return (
      <Card>
        <Border>
  <User>
    <img
      src={avatar}
      alt={username}      
    />
    <h2>{username}</h2>
    <p>@{tag}</p>
    <p>{location}</p>
  </User>
  <Table>
    <li>
      <span>Followers</span>
      <span><b>{stats.followers}</b></span>
    </li>
    <li>
      <span>Views</span>
      <span><b>{stats.views}</b></span>
    </li>
    <li>
      <span>Likes</span>
      <span><b>{stats.likes}</b></span>
    </li>
          </Table>
          </Border>
</Card>
    );
};