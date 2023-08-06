import { Container, Text, Stats, Item, ItemName, ItemNumber } from './Statistics.styled'

export const Statistics = ({ title = 'Upload stats', stats }) => {
    return (
    <Container>
  <Text>{title}</Text>
            <Stats>                {
                    stats.map(({id, label, percentage}) => (
                        <Item key={id}>
      <ItemName>{label}</ItemName>
      <ItemNumber>{percentage}%</ItemNumber>
                        </Item>
                    )
                     )
                }      
  </Stats>
</Container>
)
 };