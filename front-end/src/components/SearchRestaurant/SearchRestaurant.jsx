import React, { useState } from "react";
import { Input } from "antd";
import Menu from "../Table/Menu";

const { Search } = Input;

const SearchRestaurant = (props) => {
  const [searched, setSearched] = useState(false);
  let result = [];

  const onSearch = (str) => {
    result = props.data.filter(
      (restaurant) => restaurant.menu.food.toLowerCase() === str.toLowerCase()
    );
    setSearched(true);
  };

  return (
    <div>
      <Search
        placeholder="Input your food"
        onSearch={onSearch}
        enterButton
        style={{ width: 400 }}
      />
      {searched ? <Menu menu={result} /> : <h2>Enter Your Search</h2>}
    </div>
  );
};

export default SearchRestaurant;
