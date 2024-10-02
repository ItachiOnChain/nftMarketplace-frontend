import React from "react";

//INTERNAL IMPORT
import Style from "./AudioLive.module.css";
import AudioCard from "./AudioCard/AudioCard";
import AudioCardSmall from "./AudioCardSmall/AudioCardSmall";
import images from "../../img";

const AudioLive = () => {
  // Data for large audio cards
  const largeNftData1 = {
    title: "NFT music #1123",
    price: "$3,221.33",
    likes: 24,
    remainingTime: "3h : 15m : 20s",
    stock: 24,
    backgroundImage: images.creatorbackground10,
    waveImage: images.musiceWave,
  };

  const largeNftData2 = {
    title: "NFT music #1124",
    price: "$2,450.00",
    likes: 18,
    remainingTime: "4h : 10m : 30s",
    stock: 12,
    backgroundImage: images.creatorbackground11,
    waveImage: images.musiceWave2,
  };

  // Data for small audio cards
  const smallNftData1 = {
    title: "NFT music #1142",
    price: "1.00 ETH",
    backgroundImage: images.creatorbackground1,
  };

  const smallNftData2 = {
    title: "NFT music #1143",
    price: "0.80 ETH",
    backgroundImage: images.creatorbackground2,
  };

  const smallNftData3 = {
    title: "NFT music #1144",
    price: "0.95 ETH",
    backgroundImage: images.creatorbackground3,
  };

  return (
    <div className={Style.audioLive}>
      <div className={Style.audioLive_box}>
        <div className={Style.audioLive_box_left}>
          {/* Large Audio Cards */}
          <AudioCard nftData={largeNftData1} />
          <AudioCard nftData={largeNftData2} />
        </div>
        <div className={Style.audioLive_box_right}>
          {/* Small Audio Cards */}
          <AudioCardSmall smallNftData={smallNftData1} />
          <AudioCardSmall smallNftData={smallNftData2} />
          <AudioCardSmall smallNftData={smallNftData3} />
        </div>
      </div>
    </div>
  );
};

export default AudioLive;
