
import { FriendCard } from './Friend'
import { List } from './Friends.styled'

export const FriendList = ({ items }) => {
  return (
      <List>
      {
        items.map(items => (
          <li key={items.id}>
      <FriendCard {...items} />
      </li>
            ))}
      
    </List>
  )
}

