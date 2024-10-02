import React, { useState } from "react";
import {
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";

// INTERNAL IMPORT
import Style from "./Collection.module.css";
import DaysComponent from "./DaysComponents/DaysComponents";
import images from "../../img";

const Collection = () => {
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const CardArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      collectionName: "Stellar Art",
      creatorName: "Alice Johnson",
      price: "1.255",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      collectionName: "Digital Wonders",
      creatorName: "Mark Smith",
      price: "2.000",
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      collectionName: "Virtual Landscapes",
      creatorName: "Elena Rodriguez",
      price: "0.750",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      collectionName: "Abstract Dreams",
      creatorName: "Chen Wei",
      price: "3.400",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      collectionName: "Creative Realities",
      creatorName: "James Brown",
      price: "4.100",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      collectionName: "Modern Expressions",
      creatorName: "Flourence",
      price: "5.000",
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
      collectionName: "Timeless Classics",
      creatorName: "Raj Patel",
      price: "2.500",
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
      collectionName: "Innovative Creations",
      creatorName: "Maria Gonzalez",
      price: "3.300",
    },
  ];
  
  const newsArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
      collectionName: "Emerging Artists",
      creatorName: "Sara",
      price: "0.900",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      collectionName: "Future Visions",
      creatorName: "Numan",
      price: "1.700",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      collectionName: "Cultural Heritage",
      creatorName: "Rahul",
      price: "0.650",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      collectionName: "Whimsical Worlds",
      creatorName: "Lina",
      price: "2.200",
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
      collectionName: "Nature's Touch",
      creatorName: "Smith wilson",
      price: "1.850",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      collectionName: "The Art of Tomorrow",
      creatorName: "Mr. Wade",
      price: "3.600",
    },
  ];

  const followingArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      collectionName: "Collectors' Choice",
      creatorName: "Hina",
      price: "2.800",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      collectionName: "Hidden Gems",
      creatorName: "Mia",
      price: "1.400",
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      collectionName: "Limited Editions",
      creatorName: "Elena",
      price: "5.200",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      collectionName: "Epic Journeys",
      creatorName: "Chen Wei",
      price: "4.500",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      collectionName: "Artistic Vibes",
      creatorName: "James Brown",
      price: "1.000",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      collectionName: "Masterpieces Unveiled",
      creatorName: "Flourence",
      price: "6.300",
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
      collectionName: "Colorful Narratives",
      creatorName: "Raj Patel",
      price: "2.900",
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
      collectionName: "Visual Poetry",
      creatorName: "Melena",
      price: "3.800",
    },
  ];

  const openFollower = () => {
    if (!following) {
      setFollowing(true);
      setNews(false);
    }
  };

  const openNews = () => {
    if (!news) {
      setFollowing(false);
      setNews(true);
    }
  };

  return (
    <div className={Style.collection}>
      <div className={Style.collection_title}>
        <h2>Top List Creators</h2>
        <div className={Style.collection_collections}>
          <div className={Style.collection_collections_btn}>
            <button onClick={() => openFollower()}>
              <BsCalendar3 /> 7 days
            </button>
            <button onClick={() => openNews()}>
              <BsFillCalendarDateFill /> 30 days
            </button>
          </div>
        </div>
      </div>
      
      {following && (
        <div className={Style.collection_box}>
          {followingArray.map((el, i) => (
            <DaysComponent 
              key={i + 1} 
              el={el} 
              collectionName={el.collectionName} 
              creatorName={el.creatorName} 
              price={el.price} 
            />
          ))}
        </div>
      )}

      {news && (
        <div className={Style.collection_box}>
          {newsArray.map((el, i) => (
            <DaysComponent 
              key={i + 1} 
              el={el} 
              collectionName={el.collectionName} 
              creatorName={el.creatorName} 
              price={el.price} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
