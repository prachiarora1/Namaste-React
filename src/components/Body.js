import React from "react";
import Card, { withPromotedLabel } from "./Card";
import resList from "../utils/MockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [list, setList] = useState(null);
  const [filterList, setFilterList] = useState(null);
  const [searchText, setSearchText] = useState("");
  const PromotedCard = withPromotedLabel(Card);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    let jsonPicked =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants;
    setList(jsonPicked);
    setFilterList(jsonPicked);
  };
  useEffect(() => {
    fetchData();
  });

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline.</h1>;
  }
  return list?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className={"px-4 py-2 bg-green-100 m-4 rounded-lg"}
            onClick={() => {
              const filterList = list.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterList(filterList);
            }}
          >
            search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filterList = list.filter((res) => res.info.avgRating > 4);
              setFilterList(filterList);
            }}
          >
            Top rated restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterList?.map((res) => (
          <Link key={res.info.id} to={"restaurants/" + res.info.id}>
            {Object.keys(res.info.badges)?.length ? (
              <PromotedCard resObj={res} />
            ) : (
              <Card resObj={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
