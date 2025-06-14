import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
// 343678  121603
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) =>
      c.card?.card?.["@type"]?.includes("ItemCategory")
    );

  return (
    <div>
      <div className="flex flex-col items-center justify-center text">
        <h1 className="text-2xl font-bold">{name}</h1>
        <h2 className="text-lg font-bold">
          {cuisines.join(", ")} - {costForTwoMessage}
        </h2>
      </div>
      {categories?.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex()}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
