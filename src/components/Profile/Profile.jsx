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
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
