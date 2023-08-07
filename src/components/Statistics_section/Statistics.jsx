import {
  Container,
  Text,
  Stats,
  Item,
  ItemName,
  ItemNumber,
} from './Statistics.styled';
// import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <Text>{title ? title : 'Upload stats'}</Text>
      <Stats>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <ItemName>{label}</ItemName>
            <ItemNumber>{percentage}%</ItemNumber>
          </Item>
        ))}
      </Stats>
    </Container>
  );
};