import React from "react";
import Image from "next/image";

//INTERNALIMPORT
import Style from "./Video.module.css";
import images from "../../img";

const Video = () => {
  return (
    <div className={Style.Video}>
      <div className={Style.Video_box}>
        <h1>
          NeoBazar: Powered by Neo X
        </h1>
        <p>
          Our NFT marketplace is built on Neo X, an EVM-compatible sidechain that bridges Neo N3 with the Ethereum Virtual Machine (EVM) network. By leveraging Neo X, we offer seamless interoperability, faster transactions, and lower fees, empowering creators and collectors to experience the best of both ecosystems.
        </p>

        <div className={Style.Video_box_frame}>
          <div className={Style.Video_box_frame_left}>
            <Image
              src={images.NFTVideo}
              alt="Video image"
              width={1920}
              height={1080}
              objectFit="cover"
              className={Style.Video_box_frame_left_img}
            />
          </div>

          <div className={Style.Video_box_frame_right}>Hey</div>
        </div>
      </div>
    </div>
  );
};

export default Video;
