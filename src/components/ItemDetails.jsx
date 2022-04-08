import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import {getLaunchByFlighNumber} from "../services/launches";


function ItemsDetails(){

    let {launchId} = useParams();

    const [launch, setLaunch] = useState([]);

    useEffect(() =>{
        getLaunchByFlighNumber(launchId).then(setLaunch)
    }, [launchId]);

    return(
        <div>
            Hola {launchId}
            {JSON.stringify(launch)}
        </div>
    )
}


export {ItemsDetails}