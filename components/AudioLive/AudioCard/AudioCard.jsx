import React, { useState } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

//INTERNAL IMPORT
import Style from "./AudioCard.module.css";
import images from "../../../img";
import LikeProfile from "../../LikeProfile/LikeProfile";

const AudioCard = ({ nftData }) => {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);

  const likeNft = () => {
    setLike(!like);
  };

  const playMusic = () => {
    setPlay(!play);
  };

  return (
    <div className={Style.audioCard}>
      <div className={Style.audioCard_box}>
        <div className={Style.audioCard_box_like_time}>
          <div className={Style.audioCard_box_like} onClick={likeNft}>
            {like ? (
              <AiFillHeart className={Style.audioCard_box_like_icon} />
            ) : (
              <AiOutlineHeart
                className={Style.audioCard_box_like_icon_unlike}
              />
            )}
            <span>{nftData.likes}</span>
          </div>

          <div className={Style.audioCard_box_time}>
            <div className={Style.audioCard_box_like_time_remaing}>
              <small>Remaining time</small>
              <h5>{nftData.remainingTime}</h5>
            </div>
          </div>
        </div>

        <div className={Style.audioCard_box_player}>
          <Image src={nftData.waveImage} alt="music" width={200} />
          <div
            className={Style.audioCard_box_musicPlayer}
            onClick={playMusic}
          >
            {play ? (
              <div className={Style.audioCard_box_musicPlayer_icon}>
                <TbPlayerPause />
              </div>
            ) : (
              <div className={Style.audioCard_box_musicPlayer_icon}>
                <TbPlayerPlay />
              </div>
            )}
          </div>
        </div>

        <div className={Style.audioCard_box_details}>
          <div className={Style.audioCard_box_details_info}>
            <h4>{nftData.title}</h4>
            <div className={Style.audioCard_box_details_info_price}>
              <small>Price</small>
              <p>{nftData.price}</p>
            </div>
          </div>

          <div className={Style.audioCard_box_details_stock}>
            <LikeProfile />
            <small>{nftData.stock} in stock</small>
          </div>
        </div>

        <div className={Style.audioCard_box_img}>
          <Image
            src={nftData.backgroundImage}
            alt="background"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
