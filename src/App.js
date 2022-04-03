import * as API from "./services/launches";
import { useState, useEffect } from "react";
import logoSpaceX from "./img/SpaceX-White-Logo.wine.svg";
import "./components/css/header.scss";
import Item from "./components/Item";
import SearchLaunch from "./components/SearchLaunch";
import {FilterContainer} from './components/FilterContainer'

function App() {
  const [launches, setLaunches] = useState([]);
  const [search, setSearch] = useState("");
  const [launchSuccess, setLaunchSuccess] = useState ('')

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  let defaultLaunches = [];

  if (search.length > 1) {
    defaultLaunches = launches.filter((launch) => {
      let searchValue = search.toLowerCase();
      let nameMission = launch.mission_name.toLowerCase();
      return nameMission.includes(searchValue);
    });
  } else {
    defaultLaunches = launches;
  }

  // eslint-disable-next-line no-lone-blocks
  {
    if(launchSuccess === 'success'){
      defaultLaunches = launches.filter((launch) => {
        return launch.launch_success === true
      })
    }else if(launchSuccess === 'failed'){
      defaultLaunches = launches.filter((launch) => {
        return launch.launch_success === false
      })
    }
  }

  return (
    <div className="App ">
      <header className="App-header">
        <img src={logoSpaceX} width="280px" alt="" />
      </header>

      <div className="banner launchers">
        <h1>SpaceX Launches</h1>
      </div>
      <div className="search">
        <SearchLaunch search={search} setSearch={setSearch} />
      </div>

      <FilterContainer setLaunchSuccess={setLaunchSuccess} launchSuccess={launchSuccess} ></FilterContainer>
    <body>
    <div className="section-items container">
        {!defaultLaunches.length > 0 && search.length > 0?
         <div className="not-search">
         No encontramos "{search}", por favor realiza una busqueda valida.
       </div>:
         defaultLaunches.map((launch, index) => {
          return <Item data={launch} index={index} />;
        })
          
        
        }
        
      </div>
    </body>

    </div>
  );
}

export default App;
