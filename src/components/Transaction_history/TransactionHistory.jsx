import { Container, Table, Thead, Tr } from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
  return (
      <Container>
        <Table>            
<Thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </Thead>
            <tbody>
                {
                    items.map(({ type, amount, currency, id }) => (
                        <Tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </Tr>
                    ))}
  </tbody>
      </Table>
</Container>      
  )
}

