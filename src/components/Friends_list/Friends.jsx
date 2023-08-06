
import { FriendCard } from './Friend'
import { List, ListItem } from './Friends.styled'




export const FriendList = ({ items }) => {
  return (
      <List>
      {
        items.map(items => (
          <ListItem key={items.id}>
      <FriendCard {...items} />
      </ListItem>
        ))
      }      
    </List>
  )
}

