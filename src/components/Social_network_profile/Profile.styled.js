import styled from 'styled-components';

export const Card = styled.div`
  width: 400px;
  padding: 80px;
  background-color: #ebf2fc;
`;
export const Border = styled.div`
  border: 0.5px solid #aae3f6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const User = styled.div`
  padding: 30px;
  background-color: white;
  img {
    margin: 0 auto 30px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #eef9fd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 18px;
    text-align: center;
  }

  p {
    margin-top: 8px;
    font-size: 12px;
    text-align: center;
    color: gray;
  }
`;

export const Table = styled.ul`
  display: flex;
  background: #eef9fd;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% / 3);
    height: 66px;
    border: 0.25px solid #aae3f6;
    font-size: 12px;
    color: gray;
  }
`;
