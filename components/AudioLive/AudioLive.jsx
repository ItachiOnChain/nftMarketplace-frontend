// import React from "react";

// //INTERNAL IMPORT
// import Style from "./AudioLive.module.css";
// import AudioCard from "./AudioCard/AudioCard";
// import AudioCardSmall from "./AudioCardSmall/AudioCardSmall";
// import images from "../../img";

// const AudioLive = () => {

//   // Data for large audio cards
//   const largeNftData1 = {
//     title: "NFT music #1123",
//     price: "$3,221.33",
//     likes: 24,
//     remainingTime: "3h : 15m : 20s",
//     stock: 24,
//     backgroundImage: images.creatorbackground10,
//     waveImage: images.musiceWave,
//   };

//   const largeNftData2 = {
//     title: "NFT music #1124",
//     price: "$2,450.00",
//     likes: 18,
//     remainingTime: "4h : 10m : 30s",
//     stock: 12,
//     backgroundImage: images.creatorbackground11,
//     waveImage: images.musiceWave2,
//   };

//   // Data for small audio cards
//   const smallNftData1 = {
//     title: "NFT music #1142",
//     price: "1.00 ETH",
//     backgroundImage: images.creatorbackground1,
//   };

//   const smallNftData2 = {
//     title: "NFT music #1143",
//     price: "0.80 ETH",
//     backgroundImage: images.creatorbackground2,
//   };

//   const smallNftData3 = {
//     title: "NFT music #1144",
//     price: "0.95 ETH",
//     backgroundImage: images.creatorbackground3,
//   };

//   return (
//     <div className={Style.audioLive}>
//       <div className={Style.audioLive_box}>
//         <div className={Style.audioLive_box_left}>
//           {/* Large Audio Cards */}
//           <AudioCard nftData={largeNftData1} />
//           <AudioCard nftData={largeNftData2} />
//         </div>
//         <div className={Style.audioLive_box_right}>
//           {/* Small Audio Cards */}
//           <AudioCardSmall smallNftData={smallNftData1} />
//           <AudioCardSmall smallNftData={smallNftData2} />
//           <AudioCardSmall smallNftData={smallNftData3} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AudioLive;


import React, { useState, useEffect } from "react";

// INTERNAL IMPORT
import Style from "./AudioLive.module.css";
import AudioCard from "./AudioCard/AudioCard";
import AudioCardSmall from "./AudioCardSmall/AudioCardSmall";
import images from "../../img";

const AudioLive = () => {
  // Function to calculate the remaining time
  const calculateTimeLeft = (endTime) => {
    const difference = endTime - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  // Timer state and effect for large NFT #1123
  const [timeLeft1, setTimeLeft1] = useState({});
  const endTime1 = new Date().getTime() + 3 * 60 * 60 * 1000 + 15 * 60 * 1000 + 20 * 1000; // 3h : 15m : 20s
  
  useEffect(() => {
    const timer1 = setInterval(() => {
      setTimeLeft1(calculateTimeLeft(endTime1));
    }, 1000);
    return () => clearInterval(timer1);
  }, []);

  // Timer state and effect for large NFT #1124
  const [timeLeft2, setTimeLeft2] = useState({});
  const endTime2 = new Date().getTime() + 4 * 60 * 60 * 1000 + 10 * 60 * 1000 + 30 * 1000; // 4h : 10m : 30s
  
  useEffect(() => {
    const timer2 = setInterval(() => {
      setTimeLeft2(calculateTimeLeft(endTime2));
    }, 1000);
    return () => clearInterval(timer2);
  }, []);

  // Data for large audio cards
  const largeNftData1 = {
    title: "NFT music #1123",
    price: "$3,221.33",
    likes: 24,
    remainingTime: `${timeLeft1.hours || "00"}h : ${timeLeft1.minutes || "00"}m : ${timeLeft1.seconds || "00"}s`,
    stock: 24,
    backgroundImage: images.creatorbackground10,
    waveImage: images.musiceWave,
  };

  const largeNftData2 = {
    title: "NFT music #1124",
    price: "$2,450.00",
    likes: 18,
    remainingTime: `${timeLeft2.hours || "00"}h : ${timeLeft2.minutes || "00"}m : ${timeLeft2.seconds || "00"}s`,
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
