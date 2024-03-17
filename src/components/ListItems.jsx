import { useState, useEffect } from "react";
import Item from "./Item";
import SearchLaunch from "./SearchLaunch";
import { FilterContainer } from "./FilterContainer";
import {getAllLaunches} from "../services/launches";

function ListItems() {
  const [launches, setLaunches] = useState([]);
  const [search, setSearch] = useState("");
  const [launchSuccess, setLaunchSuccess] = useState("");

  useEffect(() => {
    getAllLaunches().then(setLaunches);
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
    console.log('launchSuccess', launchSuccess)
    if (launchSuccess === "success") {
      defaultLaunches = launches.filter((launch) => {
        return launch.launch_success === true;
      });
    } else if (launchSuccess === "failed") {
      defaultLaunches = launches.filter((launch) => {
        return launch.launch_success === false;
      });
    }
  

  return (
    <>
      <div className="banner launchers">
        <h1>SpaceX Launches</h1>
      </div>
      <div className="search">
        <SearchLaunch search={search} setSearch={setSearch} />
      </div>

      <FilterContainer
        setLaunchSuccess={setLaunchSuccess}
        launchSuccess={launchSuccess}
      ></FilterContainer>
      <div className="body">
        <div className="section-items container">
          {!defaultLaunches.length > 0 && search.length > 0 ? (
            <div className="not-search">
              No encontramos "{search}", por favor realiza una busqueda valida.
            </div>
          ) : (
            defaultLaunches.map((launch, index) => {
              return <Item data={launch} key={index} index={index} />;
            })
          )}
        </div>
      </div>
    </>
  );
}

export { ListItems };
