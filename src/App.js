import * as API from './services/launches'
import { useState, useEffect } from 'react'
import logoSpaceX from './img/SpaceX-White-Logo.wine.svg'
import './components/css/header.scss'
import Item from './components/Item'


function App() {

  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, [])

  return (
    <div className="App ">
      <header className="App-header">
        <img src={logoSpaceX} width="280px" alt="" />
      </header>

    <div className="banner launchers">
    <h1>SpaceX Launches</h1>

    

    </div>

      <div className="section-items container">
        {
          launches.map((launch, index) => {
            console.log(launch)
            return (
              <Item data={launch} index={index}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
