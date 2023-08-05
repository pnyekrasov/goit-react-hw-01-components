
export const FriendCard = ({ avatar, name }) => {
  return (
    <>      
      <span></span>
      <img src={avatar} alt={name} width="48" />
      <p><b>{name}</b></p>
    </>
  );
};
