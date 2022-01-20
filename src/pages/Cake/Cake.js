import React, { useState } from "react";
import "./Cake.css";
import { getVolumeLevel } from "../../audio/Audio";
import cakeOn from "../../img/cake-on.png";
import cakeOff from "../../img/cake-off.png";
import Modal from "react-modal";
import { Link } from "react-router-dom";

export default function Cake() {
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [isCandleOff, setIsCandleOff] = useState(false);
  //불의 상태
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //팝업 modal

  // 팝업 on
  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  getVolumeLevel(setVolumeLevel); // 소리 크기 불러오기 getVolumeLevel에 저장

  if (!isCandleOff) {
    if (volumeLevel > 35) {
      setIsCandleOff(true);
      setTimeout(openModal, 3500);
    }
  }

  return (
    <div id="cakePageRoot">
      <img
        alt="cake"
        src={isCandleOff ? cakeOff : cakeOn} //삼항연산자
        id="cakeImg"
      />
      <Modal isOpen={modalIsOpen} contentLabel="팝업!">
        <h1>당신을 초대합니다.</h1>
        <p></p>
        <Link to="/letter">편지 읽으러 가기</Link>
      </Modal>
    </div>
  );
}
