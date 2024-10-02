import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Subscribe.module.css";
import images from "../../img";

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Never miss any alpha</h2>
          <p>
            Subcribe to our super-exclusive newsletter and be the first to know
            about upcoming aphas
          </p>
          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>Exclusive NFT Drops and Upcoming Events            </small>
          </div>

          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Marketplace Insights and Trends</small>
          </div>

          <div className={Style.subscribe_box_left_input}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>

        <div className={Style.subscribe_box_right}>
          <Image
            src={images.update}
            alt="get update"
            height={600}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
