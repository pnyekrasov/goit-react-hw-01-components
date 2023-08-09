import { FriendCard } from './FriendCard';
import { List, ListItem } from './Friends.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <FriendCard {...item} />
        </ListItem>
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
