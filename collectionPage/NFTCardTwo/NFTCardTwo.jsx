import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";

// INTERNAL IMPORT
import Style from "./NFTCardTwo.module.css";
import { LikeProfile } from "../../components/componentsindex";

const NFTCardTwo = ({ NFTData }) => {
  const [likes, setLikes] = useState(
    NFTData.map((nft) => ({ id: nft.id, liked: false, likeCount: nft.likes }))
  );

  const likeNFT = (id) => {
    setLikes((prevLikes) =>
      prevLikes.map((nft) =>
        nft.id === id
          ? { ...nft, liked: !nft.liked, likeCount: nft.liked ? nft.likeCount - 1 : nft.likeCount + 1 }
          : nft
      )
    );
  };

  return (
    <div className={Style.NFTCardTwo}>
      {NFTData.map((el, i) => {
        const nftLikes = likes.find((nft) => nft.id === el.id);
        return (
          <div className={Style.NFTCardTwo_box} key={i}>
            <div className={Style.NFTCardTwo_box_like}>
              <div className={Style.NFTCardTwo_box_like_box}>
                <div className={Style.NFTCardTwo_box_like_box_box}>
                  <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                  <p onClick={() => likeNFT(el.id)}>
                    {nftLikes.liked ? <AiFillHeart /> : <AiOutlineHeart />}
                    <span>{nftLikes.likeCount}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={Style.NFTCardTwo_box_img}>
              <Image
                src={el.image}
                alt="NFT"
                width={500}
                height={500}
                objectFit="cover"
                className={Style.NFTCardTwo_box_img_img}
              />
            </div>

            <div className={Style.NFTCardTwo_box_info}>
              <div className={Style.NFTCardTwo_box_info_left}>
                <LikeProfile />
                <p>Clone #{i + 1}</p>
              </div>
              <small>4{i + 2}</small>
            </div>

            <div className={Style.NFTCardTwo_box_price}>
              <div className={Style.NFTCardTwo_box_price_box}>
                <small>Current Bid</small>
                <p>1{i + 5}.000 ETH</p>
              </div>
              <p className={Style.NFTCardTwo_box_price_stock}>
                <MdTimer /> <span>{i + 1} hours left</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NFTCardTwo;
