import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./SliderCard.module.css";
import images from "../../../img";
import LikeProfile from "../../LikeProfile/LikeProfile";

const SliderCard = ({ el, i }) => {
  // Function to calculate remaining time
  const calculateTimeLeft = (endTime) => {
    const difference = endTime - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  // Set the initial end time for each card dynamically
  const [timeLeft, setTimeLeft] = useState({});
  const endTime = new Date().getTime() + (100 - i) * 60 * 60 * 1000 + (10 * i + 10) * 60 * 1000 + (i + 1) * 10 * 1000;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div className={Style.sliderCard}>
      <div className={Style.sliderCard_box}>
        <motion.div className={Style.sliderCard_box_img}>
          <Image
            src={el.background}
            className={Style.sliderCard_box_img_img}
            alt="slider profile"
            width={500}
            height={300}
            objectFit="cover"
          />
        </motion.div>

        <div className={Style.sliderCard_box_title}>
          <p>NFT Video #124{i + 1}</p>
          <div className={Style.sliderCard_box_title_like}>
            {/* <LikeProfile /> */}
            <small>{i + 1} of 100</small>
          </div>
        </div>

        <div className={Style.sliderCard_box_price}>
          <div className={Style.sliderCard_box_price_box}>
            <small>Current Bid</small>
            <p>1.{i + 1}00 ETH</p>
          </div>

          <div className={Style.sliderCard_box_price_time}>
            <small>Remaining time</small>
            <p>
              {timeLeft.hours !== undefined
                ? `${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`
                : "Loading..."}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;
