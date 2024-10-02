import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./NFTCard.module.css";
import images from "../../img";

const NFTCard = () => {
  const [like, setLike] = useState(Array(9).fill(true));

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
      time: "3h : 15m : 20s",
      stock: 61,
      likes: 22,
    },
    {
      image: images.nft_image_2,
      title: "Clone #17374",
      bid: "2.500ETH",
      time: "5h : 20m : 10s",
      stock: 45,
      likes: 34,
    },
    {
      image: images.nft_image_3,
      title: "Clone #17375",
      bid: "0.800ETH",
      time: "1h : 50m : 05s",
      stock: 20,
      likes: 15,
    },
    {
      image: images.nft_image_1,
      title: "Clone #17376",
      bid: "3.000ETH",
      time: "4h : 45m : 30s",
      stock: 90,
      likes: 42,
    },
    {
      image: images.nft_image_2,
      title: "Clone #17377",
      bid: "1.200ETH",
      time: "2h : 30m : 40s",
      stock: 75,
      likes: 56,
    },
    {
      image: images.nft_image_3,
      title: "Clone #17378",
      bid: "4.000ETH",
      time: "6h : 10m : 55s",
      stock: 12,
      likes: 28,
    },
    {
      image: images.nft_image_1,
      title: "Clone #17379",
      bid: "2.100ETH",
      time: "7h : 00m : 00s",
      stock: 34,
      likes: 78,
    },
    {
      image: images.nft_image_2,
      title: "Clone #17380",
      bid: "0.900ETH",
      time: "8h : 20m : 45s",
      stock: 67,
      likes: 19,
    },
    {
      image: images.nft_image_3,
      title: "Clone #17381",
      bid: "5.500ETH",
      time: "9h : 55m : 10s",
      stock: 10,
      likes: 60,
    },
  ];

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
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart
                    className={Style.NFTCard_box_update_left_like_icon}
                  />
                )}
                {""} {el.likes}
              </div>
            </div>

            <div className={Style.NFTCard_box_update_right}>
              <div className={Style.NFTCard_box_update_right_info}>
                <small>Remaining time</small>
                <p>{el.time}</p>
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
