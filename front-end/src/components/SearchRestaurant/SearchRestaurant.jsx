
import React, { useState } from "react";
import { Input } from "antd";
import Menu from "../Table/Menu";
import Main from "../Main/Main"
import { Restaurant } from "../Data/Restaurant";

const { Search } = Input;

const SearchRestaurant = (props) => {

  const [searched, setSearched] = useState(false);
  const [finding, setFinding] = useState([]);
  
 


  const onSearch = (str) => {
    setFinding([]);
    for(let i=0; i < props.data.length; i++) {

        for (let t=0; t < props.data[i].menu.length; t++){
          if (props.data[i].menu[t].food.toLowerCase() === str.toLowerCase()){
            setFinding([{...props.data[i]}]);
          }
        
      }
   }
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
      <h2>Enter Your Search</h2>
      {console.log(finding)}
      {searched && <Main restaurantData={finding}/>}
  
    </div>
  );
};

export default SearchRestaurant;
