import { Box, Badge, Button } from '@chakra-ui/react'
import './css/item.scss'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TodayIcon from '@mui/icons-material/Today';
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import { Link, useNavigate } from "react-router-dom";
import { flushSync } from 'react-dom';

const AnimatedLink = ({ to, children }) => {
  const navigate = useNavigate();
  return (
    <a
      href={to}
      onClick={(ev) => {
        ev.preventDefault();
        document.startViewTransition(() => {
          flushSync(() => {
            navigate(to);
          });
        });
      }}
    >
      {children}
    </a>
  );
};

function Item({data, index}) {
  return (
    <Box key={index} className="item"
      bg="gray.200"
      p="5"
      borderRadius="lg"
      m="4"
    >

      <img src={data.links.mission_patch_small} width="100px" alt={data.links.mission_patch_small} />

      <div className="item-detail">
        <h3 className="title mission_name">Mission <strong>{data.mission_name}</strong> </h3>

        <div className="list details">
          <li> <LocationOnIcon /> {data.launch_site.site_name_long}</li>
          <li> <RocketLaunchIcon />  {data.rocket.rocket_name}</li>
          <li> <TodayIcon /> {dayjs(data.launch_date_local).locale('es').format('D MMMM, YYYY')} </li>
        </div>
      </div>
      <Badge p="1.5" borderRadius="md" className="label year" colorScheme='purple'>{data.launch_year}</Badge>
      <AnimatedLink to={`/launch/${data.flight_number}`}><Button colorScheme='blue' variant="solid" >Leer más</Button></AnimatedLink>
      {data.launch_success === true ? <Badge p="1.5" borderRadius="md" className="label success" colorScheme='green'>Success mission</Badge> : <Badge p="1.5" borderRadius="md" className="label danger" colorScheme='red'>Failed mission</Badge>}

    </Box>
  )
}


export default Item;