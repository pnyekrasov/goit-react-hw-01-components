import styled from 'styled-components';

export const Card = styled.div`
  width: 400px;
  padding: 80px;
  background: #ebedf0;
`;
export const Border = styled.div`
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const User = styled.div`
  padding: 30px;
  background-color: #fdfdfe;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
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
    color: #474748;
  }
`;

export const Table = styled.ul`
  display: flex;
  background: #eef9fd;
  border-top: 0.25px solid #aae3f6;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  li:nth-child(2) {
    border-left: 0.25px solid #aae3f6;
    border-right: 0.25px solid #aae3f6;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% / 3);
    height: 66px;
    font-size: 12px;
    color: #474748;
  }
`;
