import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../img";

const Category = () => {
  const CategoryArray = [
    {
      image: images.creatorbackground1,
      title: "Digital Art",
      nfts: "1995 NFTs",
    },
    {
      image: images.creatorbackground10,
      title: "Collectibles",
      nfts: "1500 NFTs",
    },
    {
      image: images.creatorbackground11,
      title: "Gaming Assets",
      nfts: "1200 NFTs",
    },
    {
      image: images.creatorbackground2,
      title: "Music",
      nfts: "900 NFTs",
    },
    {
      image: images.creatorbackground4,
      title: "Virtual Real Estate",
      nfts: "800 NFTs",
    },
    {
      image: images.creatorbackground5,
      title: "Photography",
      nfts: "600 NFTs",
    },
  ];

  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
        {CategoryArray.map((el, i) => (
          <div className={Style.category_box} key={i}>
            <Image
              src={el.image}
              className={Style.category_box_img}
              alt={`${el.title} Background image`}
              width={350}
              height={150}
              objectFit="cover"
            />

            <div className={Style.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>{el.title}</h4>
                <small>{el.nfts}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
