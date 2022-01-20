import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";

function Intro() {
  return (
    <div id="introPageRoot">
      <h1 id="introPageTitle">
        당신에게 선물이 도착했습니다! <br /> 한번 열어보세요!
      </h1>

      <Link to="/cake" id="introPageImgContainer">
        <img
          id="introPageImg"
          src="https://littledeep.com/wp-content/uploads/2020/03/gift_illustration_style2.png"
          alt="gift"
        />
      </Link>
    </div>
  );
}

export default Intro;
