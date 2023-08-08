import styled from 'styled-components';

export const List = styled.ul`
  width: 400px;
  padding: 25px;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  width: 350px;
  height: 100px;
  margin: 10px auto;
  padding: 10px;
  background-color: whitesmoke;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  img {
    width: 80px;
    height: 80px;
    background: magenta;
    border-radius: 10px;
  }

  p {
    font-size: 24px;
  }
`;

export const Ikon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
