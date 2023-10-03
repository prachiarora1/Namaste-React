import React from "react";
import Card from "./card";
import resList from "../utils/MockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((res, index) => (
          <Card key={res.info.id} resObj={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
