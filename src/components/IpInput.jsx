import { useState } from "react";
import "../styles/ipInput.css";
export default function IpInput({
  setCordinates,
  setIp,
  setTimezone,
  setIsp,
  setLocation,
  setIsLoading,
}) {
  const [ipValue, setIpValue] = useState("");
  const ipLookup = (ipAddress) => {
    setIsLoading(true);
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_lEwJxpZExx9zL3RnQUu5hsC6e6n4g&ipAddress=${ipAddress}`
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
  };
  return (
    <>
      <h1>IP Address Tracker</h1>
      <div className="ip-input">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          onChange={(e) => setIpValue(e.target.value)}
        />
        <div onClick={() => ipLookup(ipValue)}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </div>
    </>
  );
}
