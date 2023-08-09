import {
  Container,
  Text,
  Stats,
  Item,
  ItemName,
  ItemNumber,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Text>{title}</Text>}
      <Stats>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} $length={stats.length}>
            <ItemName>{label}</ItemName>
            <ItemNumber>{percentage}%</ItemNumber>
          </Item>
        ))}
      </Stats>
    </Container>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
