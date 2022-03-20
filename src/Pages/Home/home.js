import React from "react";
import Body from "../../component/Body/body";
import Slide from "../../component/Slide/slide";


const home = () => {
  //inspect ko protect krta h
  //  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <>
      <Slide />
      <Body />
    </>
  );
};

export default home;
