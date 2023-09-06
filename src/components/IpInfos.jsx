import "../styles/ipInfos.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function IpInfos({
  ip,
  timezone,
  isp,
  location,
  isLoading,
  setIsLoading,
}) {
  return (
    <div className="ip-info">
      <ul>
        <li>IP ADDRESS</li>
        {isLoading ? <Skeleton width={"80%"} height={"25px"} /> : <li>{ip}</li>}
      </ul>
      <ul>
        <li>LOCATION</li>
        {isLoading ? (
          <Skeleton width={"80%"} height={"25px"} />
        ) : (
          <li>{location}</li>
        )}
      </ul>
      <ul>
        <li>TIMEZONE</li>
        {isLoading ? (
          <Skeleton width={"80%"} height={"25px"} />
        ) : (
          <li>{timezone}</li>
        )}
      </ul>
      <ul>
        <li>ISP</li>
        {isLoading ? (
          <Skeleton width={"80%"} height={"25px"} />
        ) : (
          <li>{isp}</li>
        )}
      </ul>
    </div>
  );
}
