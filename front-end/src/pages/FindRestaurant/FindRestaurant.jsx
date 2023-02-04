import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchRestaurant from "../../components/SearchRestaurant/SearchRestaurant";

const FindRestaurant = (props) => {
  return (
    <div className="AppGlass">
      <Sidebar heading={"Find Restaurant"} />
      <Header heading={"Find Restaurant"} />
      <SearchRestaurant data={props.data} />
      <Footer />
    </div>
  );
};

export default FindRestaurant