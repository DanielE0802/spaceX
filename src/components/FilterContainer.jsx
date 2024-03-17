import React from "react";
import { Select, Heading } from '@chakra-ui/react'

function FilterContainer(props) {
  const changeLauncheSuccess = (e) => {
    props.setLaunchSuccess(e.target.value);
  };

  return (
    <div className="Filter container">
      <Heading size={"md"} mb={2}>Filtros</Heading>
      <div className="Filters">
        <Select  value={props.launchSuccess} variant='outline' placeholder='Filled' onChange={changeLauncheSuccess} >
          <option value="default" default >No filter</option>
          <option value="failed" >Failed mission</option>
          <option value="success" >Success mission</option>
        </Select>
      </div>
      {/* <div className="clearFilters">Clear</div> */}
    </div>
  );
}

export { FilterContainer };
