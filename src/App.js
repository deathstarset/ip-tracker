import logo from "./logo.svg";
import "./App.css";
import IpSearch from "./components/IpSearch";
import MapIp from "./components/MapIp";
import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function App() {
  const [cordinates, setCordinates] = useState();
  return (
    <div className="App">
      <SkeletonTheme>
        <IpSearch cordinates={cordinates} setCordinates={setCordinates} />
        <MapIp cordinates={cordinates} />
      </SkeletonTheme>
    </div>
  );
}

export default App;
