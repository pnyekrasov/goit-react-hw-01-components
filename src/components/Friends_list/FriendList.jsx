import { FriendCard } from './FriendCard';
import { List, ListItem } from './Friends.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ items }) => {
  return (
    <List>
      {items.map(items => (
        <ListItem key={items.id}>
          <FriendCard {...items} />
        </ListItem>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnlin: PropTypes.bool,
    })
  ),
};
