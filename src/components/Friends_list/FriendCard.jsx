import { Ikon } from './Friends.styled';

export const FriendCard = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Ikon isonline={isOnline}></Ikon>
      <img src={avatar} alt={name} width="48" />
      <p>
        <b>{name}</b>
      </p>
    </>
  );
};
