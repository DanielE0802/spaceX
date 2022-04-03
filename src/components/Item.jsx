import { Box, Badge } from '@chakra-ui/react'
import './css/item.scss'
function Item(props) {
  return (
    <Box key={props.index} className="item"
      bg="gray.200"
      p="5"
      borderRadius="lg"
      m="4"
    >

      <img src={props.data.links.mission_patch_small} width="100px" alt="" />

      <div className="item-detail">
        <h3 className="title mission_name">Mission <strong>{props.data.mission_name}</strong> </h3>

        <div className="list details">
          <li> <strong> Launch site:</strong> {props.data.launch_site.site_name_long}</li>
          <li> <strong> Rocket: </strong> {props.data.rocket.rocket_name}</li>
        </div>
      </div>

      <Badge p="1.5" borderRadius="md" className="label year" colorScheme='purple'>{props.data.launch_year}</Badge>

      {props.data.launch_success === true ? <Badge p="1.5" borderRadius="md" className="label success" colorScheme='green'>Success mission</Badge> : <Badge p="1.5" borderRadius="md" className="label danger" colorScheme='red'>Failed mission</Badge>}

    </Box>
  )
}


export default Item;