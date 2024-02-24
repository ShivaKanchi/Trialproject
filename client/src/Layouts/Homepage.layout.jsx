import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

const HomeLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Navbar />
        <Sidebar />
        <main>
          <Component {...props} />
        </main>
      </>
    );
  };

export default HomeLayout;
