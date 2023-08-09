import { FriendCard } from './FriendCard';
import { List } from './Friends.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ items }) => {
  return (
    <List>
      {items.map(items => (
        <FriendCard {...items} />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
