import IpInput from "./IpInput";
import "../styles/ipSearch.css";
import IpInfos from "./IpInfos";
import { useEffect, useState } from "react";

export default function IpSearch({ cordinates, setCordinates }) {
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useState(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_lEwJxpZExx9zL3RnQUu5hsC6e6n4g`
    )
      .then((res) => res.json())
      .then((data) => {
        setIp(data.ip);
        setCordinates([data.location.lat, data.location.lng]);
        setTimezone(`UTC ${data.location.timezone}`);
        setIsp(data.isp);
        setLocation(`${data.location.country}, ${data.location.region}`);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="ip-search">
      <div className="container ip-search-container">
        <IpInput
          cordinates={cordinates}
          setCordinates={setCordinates}
          ip={ip}
          setIp={setIp}
          setIsp={setIsp}
          setLocation={setLocation}
          setTimezone={setTimezone}
          setIsLoading={setIsLoading}
        />
        <IpInfos
          location={location}
          timezone={timezone}
          isp={isp}
          ip={ip}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
    </div>
  );
}
