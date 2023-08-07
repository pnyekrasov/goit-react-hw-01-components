import { Card, Border, User, Table } from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ item }) => {
  const { avatar, location, stats, tag, username } = item;
  return (
    <Card>
      <Border>
        <User>
          <img src={avatar} alt={username} />
          <h2>{username}</h2>
          <p>@{tag}</p>
          <p>{location}</p>
        </User>
        <Table>
          <li>
            <span>Followers</span>
            <span>
              <b>{stats.followers}</b>
            </span>
          </li>
          <li>
            <span>Views</span>
            <span>
              <b>{stats.views}</b>
            </span>
          </li>
          <li>
            <span>Likes</span>
            <span>
              <b>{stats.likes}</b>
            </span>
          </li>
        </Table>
      </Border>
    </Card>
  );
};

Profile.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string,
    location: PropTypes.string,
    tag: PropTypes.string,
    username: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
