import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  const navigate = useNavigate();
  const styles = {
    background:
      "linear-gradient(#fff 0 0) padding-box,   linear-gradient(180deg, black   0%, #fff 90%) border-box",
    border: "1px solid transparent",
    borderRaidus: "30px",
  };

  const buttonstyles = {
    background:
      "linear-gradient(#fff 0 0) padding-box,   linear-gradient(180deg,  #fff 10% , black   80%) border-box",
    border: "1px solid transparent",
    borderRaidus: "30px",
  };
  const pagebuttons = [
    {
      name: "Form",
      link: "/form",
    },
    {
      name: "Responses",
      link: "/response",
    },
    {
      name: "MapView",
      link: "/mappoint",
    },
    {
      name: "FileManager",
      link: "/filemanager",
    },
    {
      name: "Animation",
      link: "/animation",
    },
    {
      name: "Hover Animation",
      link: "/hoveranimation",
    },
    {
      name: "Carousel",
      link: "/carousel",
    },
  ];

  return (
    <div id="sidebar" className="">
      <div className="">
        <div
          style={styles}
          className="inline-block lg:flex gap-2 items-center justify-evenly m-2  p-2 flex-row  "
        >
          {pagebuttons.map((data, index) => (
            <button
              style={buttonstyles}
              id="mainbuttons"
              key={index}
              className=" w-full font-mono rounded-md "
              onClick={() => {
                navigate(data.link);
              }}
            >
              {data.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
