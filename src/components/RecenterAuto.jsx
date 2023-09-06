import { useMap } from "react-leaflet";
import { useEffect } from "react";
export default function RecenterAuto({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng]);
  return null;
}
