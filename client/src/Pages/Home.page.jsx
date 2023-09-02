import React from "react";
import "./Homepage.css";
import hello from "../assests/hello.gif";

const Home = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center relative p-5">
        <h1>This is home</h1>
        <div>
          <img src={hello} />
        </div>
      </div>
    </>
  );
};

export default Home;
