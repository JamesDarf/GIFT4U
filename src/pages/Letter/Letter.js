import React from "react";
import "./Letter.css";
import NewLineText from "../../components/NewLineText";
import { Link } from "react-router-dom";

function letterDesc() {
  var letter = `
        TO. reciver's name
        Happy Birthday!!
        FROM. author's name`;
  return letter;
}

export default function Letter() {
  return (
    <div>
      <p id="letterDesc">
        <NewLineText text={letterDesc()} />
        <Link to="/outro" id="nextBtn">
          다음
        </Link>
      </p>
    </div>
  );
}
