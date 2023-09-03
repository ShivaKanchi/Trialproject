import React, { useState, useEffect } from "react";

function MapGet() {
  const [location, setLocation] = useState({});
  const [ip, setIp] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => setIp(data.ip))
        .catch((error) => console.log(error));
    });
  }, []);
  return (
    <div className="p-5">
      <span>Latitude: {location.latitude}</span>
      <br />
      <span>Longitude: {location.longitude}</span>
      <br />
      <span className="">Ip Address:{ip}</span> <br />
      <span
        className={
          ip.length === 0
            ? "opacity-0 transition-all delay-500"
            : "opacity-100 transition-all delay-500"
        }
      >
        Im not saving this ≧∀≦
      </span>
    </div>
  );
}

export default MapGet;
