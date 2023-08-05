export const FriendCard = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span></span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};
