import styled from 'styled-components';

export const Container = styled.section`
  padding: 40px;
`;

export const Table = styled.table`
  table-layout: fixed;
  width: 600px;
  border-collapse: collapse;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Thead = styled.thead`
  height: 40px;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  background: #6ecfef;

  :nth-child(even) {
    border-left: 0.5px solid #fff;
  }

  :nth-child(even) {
    border-right: 0.5px solid #fff;
  }
`;

export const Tbody = styled.tbody`
  tr:nth-child(odd) {
    background: #fdfdfe;
  }

  tr:nth-child(even) {
    background: #eef9fd;
  }
`;

export const Tr = styled.tr`
  height: 40px;
  text-align: center;
  font-size: 16px;
  color: #193c47;
  text-transform: capitalize;

  :nth-child(even) {
    border-left: 0.5px solid #eef0f2;
  }

  :nth-child(even) {
    border-right: 0.5px solid #eef0f2;
  }
`;
