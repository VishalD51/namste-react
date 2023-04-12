import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
useState;
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.data.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.data.data.id}
            resData={restaurant.data}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
