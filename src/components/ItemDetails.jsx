// import { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";
// import { getLaunchByFlighNumber, getRocketById } from "../services/launches";
import { Badge, Heading } from "@chakra-ui/react";


// function ItemsDetails(){

//     let {launchId} = useParams();

//     const [launch, setLaunch] = useState([]);

//     useEffect(() =>{
//         getLaunchByFlighNumber(launchId).then(setLaunch)
//     }, [launchId]);

    
//     let arrayOfIMages = ["banner-spaceX1", "banner-spaceX2", "banner-spaceX3", "banner-spaceX4"]


//     return (
//         <>
//          <div className="banner launchers"></div>
//         <div className="container" style={{ paddingTop: "100px" }} >
//             {launch.launch_success === true ? <Badge p="1.5" borderRadius="md" className="label success" colorScheme='green'>Success mission</Badge> : <Badge p="1.5" borderRadius="md" className="label danger" colorScheme='red'>Failed mission</Badge>}
//             <Badge p="1.5" borderRadius="md" className="label year" colorScheme='purple'>{launch.launch_year}</Badge>

//             <div className="main-info section">

//                 <Heading style={{ width: "100%" }} as='h2' size='2xl'  >{launch.mission_name}</Heading >
//                 <p>{launch.details}</p>
//                 <img src={launch.links.mission_patch_smal} alt="" />

//             </div>
//             <div className="video-info section">
//                 {/* <iframe width="100%" height="515" src={`https://www.youtube.com/embed/${videoLink[1]}?rel=0&amp;autoplay=1`}
//                     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreeny>
//                 </iframe> */}
//             </div>

//         </div>

//         <div className="bg-black">
//         <div className="rocket-info section container">
//                 <Heading >Cohete: {launch.rocket.rocket_name}</Heading>
//                 Hola {launchId}
//             </div>
         
//         </div>
//         </>
//     )
// }


import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import {getLaunchByFlighNumber} from "../services/launches";


function ItemsDetails(){

    let {launchId} = useParams();

    const [launch, setLaunch] = useState("[]");
    const [videoLink, setVideoLink] = useState("")

    useEffect(() =>{
        getLaunchByFlighNumber(launchId, setLaunch).then((data) =>setVideoLink(data.links.video_link.split("="))).catch(error => console.log(error));
    }, [launchId]);

    return(
        <div>
            Hola {launchId}
            {launch.flight_number}

            <div className="container" style={{ paddingTop: "100px" }} >
            {launch.launch_success === true ? <Badge p="1.5" borderRadius="md" className="label success" colorScheme='green'>Success mission</Badge> : <Badge p="1.5" borderRadius="md" className="label danger" colorScheme='red'>Failed mission</Badge>}
            <Badge p="1.5" borderRadius="md" className="label year" colorScheme='purple'>{launch.launch_year}</Badge>

            <div className="main-info section">

                 <Heading style={{ width: "100%" }} as='h2' size='2xl'  >{launch.mission_name}</Heading >
                <p>{launch.details}</p>
                 {/* <img src={  launch.links.mission_patch_small} alt="">  */}

            </div>
            <div className="video-info section">
                <iframe width="100%" height="515" src={`https://www.youtube.com/embed/${videoLink[1]}?rel=0&amp;autoplay=1`}
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreeny>
    </iframe>
            </div>

        </div>
        </div>
    )
}

export { ItemsDetails }
