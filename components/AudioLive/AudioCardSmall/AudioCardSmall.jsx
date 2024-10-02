import React, { useState } from "react";
import Image from "next/image";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

//INTERNAL IMPORT
import Style from "./AudioCardSmall.module.css";
import LikeProfile from "../../LikeProfile/LikeProfile";

const AudioCardSmall = ({ smallNftData }) => {
  const [play, setPlay] = useState(false);

  const playMusic = () => {
    setPlay(!play);
  };

  return (
    <div className={Style.audioPlayer}>
      <div className={Style.audioPlayer_box}>
        <Image
          src={smallNftData.backgroundImage}
          alt="music"
          width={100}
          height={100}
          className={Style.audioPlayer_box_img}
        />

        <div className={Style.audioPlayer_box_info}>
          <h4>{smallNftData.title}</h4>
          <div className={Style.audioPlayer_box_info_box}>
            <LikeProfile />
            <div className={Style.audioPlayer_box_info_box_price}>
              <small>Price</small>
              <p>{smallNftData.price}</p>
            </div>
          </div>
        </div>

        <div
          className={Style.audioPlayer_box_playBtn}
          onClick={playMusic}
        >
          {play ? <TbPlayerPause /> : <TbPlayerPlay />}
        </div>
      </div>
    </div>
  );
};

export default AudioCardSmall;
