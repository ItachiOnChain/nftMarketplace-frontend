import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img";
import { NFTCardTwo } from "../../collectionPage/collectionIndex";
import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";


const AuthorNFTCardBox = ({
  collectiables,
  created,
  like,
  follower,
  following,
}) => {

  const collectiablesArray = [
    { id: 1, image: images.nft_image_1, likes: 21 },
    { id: 2, image: images.nft_image_2, likes: 35 },
    { id: 3, image: images.nft_image_3, likes: 12 },
    { id: 4, image: images.nft_image_1, likes: 44 },
    { id: 5, image: images.nft_image_2, likes: 15 },
    { id: 6, image: images.nft_image_3, likes: 50 },
    { id: 7, image: images.nft_image_1, likes: 28 },
    { id: 8, image: images.nft_image_2, likes: 33 }
  ];

  const createdArray = [
    { id: 1, image: images.nft_image_1, likes: 21 },
    { id: 2, image: images.nft_image_2, likes: 35 },
    { id: 3, image: images.nft_image_3, likes: 12 },
    { id: 4, image: images.nft_image_1, likes: 44 }
  ];

  const likeArray = [
    { id: 1, image: images.nft_image_1, likes: 21 },
    { id: 2, image: images.nft_image_2, likes: 35 },
    { id: 3, image: images.nft_image_3, likes: 12 },
    { id: 4, image: images.nft_image_1, likes: 44 },
    { id: 5, image: images.nft_image_2, likes: 15 }
  ];

  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
  ];

  const followingArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
  ];
  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectiables && <NFTCardTwo NFTData={collectiablesArray} />}
      {created && <NFTCardTwo NFTData={createdArray} />}
      {like && <NFTCardTwo NFTData={likeArray} />}
      {follower && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followerArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorNFTCardBox;
