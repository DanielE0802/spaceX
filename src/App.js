import logoSpaceX from "./img/SpaceX-White-Logo.wine.svg";
import "./components/css/header.scss";
import { ListItems } from "./components/ListItems";
import { ItemsDetails } from "./components/ItemDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <div className="App ">
      <header className="App-header">
        <img src={logoSpaceX} width="280px" alt="" />
      </header>
      <Routes>
        <Route path="/" element={<ListItems />} />
        <Route path="/launch/:launchId" element={<ItemsDetails />} />
      </Routes>
     
    </div>
  );
}

export default App;
