import React from "react";
import "./Homepage.css";
import hello from "../assests/hello.gif";

//Layout
// import HomeLayout from "../Layouts/Homepage.layout";

const Home = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center relative p-5">
        <h1 className="headingTitle">Try Try, Dont Cry</h1>
        <div>
          <img src={hello} alt="Hello" className="hellogif" />
        </div>
      </div>
    </>
  );
};

export default Home;
