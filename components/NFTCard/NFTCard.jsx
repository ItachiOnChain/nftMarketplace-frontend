import React, { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./NFTCard.module.css";
import images from "../../img";

const NFTCard = () => {
  const [like, setLike] = useState(Array(9).fill(false));
  const [remainingTimes, setRemainingTimes] = useState([]);

  const likeNft = (index) => {
    setLike((prevLikes) =>
      prevLikes.map((liked, i) => (i === index ? !liked : liked))
    );
  };

  const CardArray = [
    {
      image: images.nft_image_1,
      title: "Clone #17373",
      bid: "1.000ETH",
      time: Date.now() + 3 * 3600 * 1000 + 15 * 60 * 1000 + 20 * 1000, // 3 hours, 15 minutes, 20 seconds from now
      stock: 61,
      likes: 22,
    },
    {
      image: images.nft_image_2,
      title: "Clone #17374",
      bid: "2.500ETH",
      time: Date.now() + 5 * 3600 * 1000 + 20 * 60 * 1000 + 10 * 1000, // 5 hours, 20 minutes, 10 seconds
      stock: 45,
      likes: 34,
    },
    {
      image: images.nft_image_3,
      title: "Clone #17375",
      bid: "0.800ETH",
      time: Date.now() + 1 * 3600 * 1000 + 50 * 60 * 1000 + 5 * 1000, // 1 hour, 50 minutes, 5 seconds
      stock: 20,
      likes: 15,
    },
    {
      image: images.nft_image_1,
      title: "Clone #17376",
      bid: "3.000ETH",
      time: Date.now() + 4 * 3600 * 1000 + 45 * 60 * 1000 + 30 * 1000, // 4 hours, 45 minutes, 30 seconds
      stock: 90,
      likes: 42,
    },
    {
      image: images.nft_image_2,
      title: "Clone #17377",
      bid: "1.200ETH",
      time: Date.now() + 2 * 3600 * 1000 + 30 * 60 * 1000 + 40 * 1000, // 2 hours, 30 minutes, 40 seconds
      stock: 75,
      likes: 56,
    },
    {
      image: images.nft_image_3,
      title: "Clone #17378",
      bid: "4.000ETH",
      time: Date.now() + 6 * 3600 * 1000 + 10 * 60 * 1000 + 55 * 1000, // 6 hours, 10 minutes, 55 seconds
      stock: 12,
      likes: 28,
    },
    {
      image: images.nft_image_1,
      title: "Clone #17379",
      bid: "2.100ETH",
      time: Date.now() + 7 * 3600 * 1000, // 7 hours
      stock: 34,
      likes: 78,
    },
    {
      image: images.nft_image_2,
      title: "Clone #17380",
      bid: "0.900ETH",
      time: Date.now() + 8 * 3600 * 1000 + 20 * 60 * 1000 + 45 * 1000, // 8 hours, 20 minutes, 45 seconds
      stock: 67,
      likes: 19,
    },
    {
      image: images.nft_image_3,
      title: "Clone #17381",
      bid: "5.500ETH",
      time: Date.now() + 9 * 3600 * 1000 + 55 * 60 * 1000 + 10 * 1000, // 9 hours, 55 minutes, 10 seconds
      stock: 10,
      likes: 60,
    },
  ];

  // Format the remaining time as hh:mm:ss
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}h : ${minutes}m : ${seconds}s`;
  };

  useEffect(() => {
    const updateRemainingTimes = () => {
      setRemainingTimes(
        CardArray.map((el) => {
          const remainingTime = el.time - Date.now();
          return remainingTime > 0 ? remainingTime : 0; // Ensure no negative times
        })
      );
    };

    // Update the countdown every second
    const interval = setInterval(updateRemainingTimes, 1000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className={Style.NFTCard}>
      {CardArray.map((el, i) => (
        <div className={Style.NFTCard_box} key={i}>
          <div className={Style.NFTCard_box_img}>
            <Image
              src={el.image}
              alt="NFT image"
              width={600}
              height={600}
              className={Style.NFTCard_box_img_img}
            />
          </div>

          <div className={Style.NFTCard_box_update}>
            <div className={Style.NFTCard_box_update_left}>
              <div
                className={Style.NFTCard_box_update_left_like}
                onClick={() => likeNft(i)}
              >
                {like[i] ? (
                  <AiFillHeart className={Style.NFTCard_box_update_left_like_icon} />
                ) : (
                  <AiOutlineHeart />
                )}
                {""} {el.likes + (like[i] ? 1 : 0)}
              </div>
            </div>

            <div className={Style.NFTCard_box_update_right}>
              <div className={Style.NFTCard_box_update_right_info}>
                <small>Remaining time</small>
                <p>{formatTime(remainingTimes[i])}</p>
              </div>
            </div>
          </div>

          <div className={Style.NFTCard_box_update_details}>
            <div className={Style.NFTCard_box_update_details_price}>
              <div className={Style.NFTCard_box_update_details_price_box}>
                <h4>{el.title}</h4>

                <div className={Style.NFTCard_box_update_details_price_box_box}>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_bid}
                  >
                    <small>Current Bid</small>
                    <p>{el.bid}</p>
                  </div>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_stock}
                  >
                    <small>{el.stock} in stock</small>
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.NFTCard_box_update_details_category}>
              <BsImages />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;
