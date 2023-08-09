import styled from 'styled-components';

export const Container = styled.section`
  width: 400px;
  padding: 80px;
  background-color: #c8c9cc;
`;

export const Text = styled.h2`
  padding: 30px 0;
  font-size: 24px;
  color: #003100;
  text-transform: uppercase;
  text-align: center;
  background-color: #fdfdfe;
`;

export const Stats = styled.ul`
  display: flex;
`;

export const Item = styled.li.attrs(({ $length }) => ({
  $length: $length || 1,
}))`
  display: flex;
  flex-direction: column;
  width: calc(100% / ${({ $length }) => $length});
  color: #fff;
  background: ${getRandomHexColor};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const ItemName = styled.span`
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
`;

export const ItemNumber = styled.span`
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 20px;
  text-align: center;
`;
