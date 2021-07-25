import React from "react";
import {
  HomeTop,
  HomeInformation,
  HomeTitle,
  HomeDesc,
  HomeInfo,
  HomeBtn,
  Span
} from "./style.js";
const Home = () => {
  return (
    <HomeTop>
      <div className="container">
        <HomeInformation>
          <HomeTitle>Hamza Nabil</HomeTitle>
          <HomeInfo>Creative Director</HomeInfo>
          <HomeDesc>
            Iam a professional <Span>UX Designer</Span> and Front-End Developer
            creating modern and resposive designs to Web and Mobile. Let us work
            together. Thank you.
          </HomeDesc>
          <HomeBtn>Let's Begin</HomeBtn>
        </HomeInformation>
      </div>
    </HomeTop>
  );
};
export default Home;
