import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";

const HomeLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Sidebar />
        <Component {...props} />
      </>
    );
  };

export default HomeLayout;
