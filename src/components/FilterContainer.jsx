function FilterContainer(props) {
  const changeLauncheSuccess = (e) => {
    props.setLaunchSuccess(e.target.value);
  };

  return (
    <div className="Filter container">
      <h5>Filtrar por:</h5>
      <div className="Filters">
        <div>
          <p>
            <select value={props.launchSuccess} onChange={changeLauncheSuccess}>
              <option value="default" default>No filter</option>
              <option value="failed" >Failed mission</option>
              <option value="success" >Success mission</option>
            </select>
          </p>
        </div>
      </div>
      {/* <div className="clearFilters">Clear</div> */}
    </div>
  );
}

export { FilterContainer };
