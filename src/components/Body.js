import React from "react";
import Card from "./card";
import resList from "../utils/MockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [list, setList] = useState(null);
  const [filterList, setFilterList] = useState(null);
  const [searchText, setSearchText] = useState("");

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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = list.filter((res) => res.info.avgRating > 4);
            setFilterList(filterList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filterList?.map((res) => (
          <Link key={res.info.id} to={"restaurants/" + res.info.id}>
            <Card resObj={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
