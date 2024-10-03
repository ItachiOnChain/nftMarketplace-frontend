import React from "react";

//INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import images from "../img";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../collectionPage/collectionIndex";
import { Slider, Brand } from "../components/componentsindex";
import Filter from "../components/Filter/Filter";

const collection = () => {
  const collectionArray = [
    { id: 1, image: images.nft_image_1, likes: 21 },
    { id: 2, image: images.nft_image_2, likes: 35 },
    { id: 3, image: images.nft_image_3, likes: 12 },
    { id: 4, image: images.nft_image_1, likes: 44 },
    { id: 5, image: images.nft_image_2, likes: 15 },
    { id: 6, image: images.nft_image_3, likes: 50 },
    { id: 7, image: images.nft_image_1, likes: 28 },
    { id: 8, image: images.nft_image_2, likes: 33 },
  ];
  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />

      <Slider />
      <Brand />
    </div>
  );
};

export default collection;
