import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

// INTERNAL IMPORT
import Style from "./DaysComponents.module.css";

const DaysComponents = ({ el, i, collectionName, creatorName, price }) => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image
            src={el.background}
            className={Style.daysComponent_box_img_img}
            alt="profile background"
            width={500}
            height={300}
            objectFit="cover"
          />
        </div>

        <div className={Style.daysComponent_box_profile}>
          <Image
            src={el.user}
            alt="profile"
            width={200}
            height={200}
            className={Style.daysComponent_box_img_1}
            objectFit="cover"
          />
          <Image
            src={el.user}
            alt="profile"
            width={200}
            height={200}
            className={Style.daysComponent_box_img_2}
            objectFit="cover"
          />
          <Image
            src={el.user}
            alt="profile"
            width={200}
            height={200}
            className={Style.daysComponent_box_img_3}
            objectFit="cover"
          />
        </div>

        <div className={Style.daysComponent_box_title}>
          <h2>{collectionName}</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <Image
                src={el.user}
                alt="profile"
                width={30}
                height={30}
                objectFit="cover"
                className={Style.daysComponent_box_title_info_profile_img}
              />

              <p>
                Creator
                <span>
                  {creatorName}
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>

            <div className={Style.daysComponent_box_title_info_price}>
              <small>{price} ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;
