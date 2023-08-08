import { Ikon } from './Friends.styled';
import PropTypes from 'prop-types';

export const FriendCard = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Ikon $isOnline={isOnline}></Ikon>
      <img src={avatar} alt={name} width="48" />
      <p>
        <b>{name}</b>
      </p>
    </>
  );
};

FriendCard.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnlin: PropTypes.bool.isRequired,
  }),
};
