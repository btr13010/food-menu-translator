import React from 'react'
import './ExploreRestaurant.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';

const ExploreRestaurant = (props) => {
  return (
    <div className='AppGlass'>
      <Sidebar heading={"Explore Restaurant"}/>
      <Header heading={"Explore Restaurant"}/>
      <Main restaurantData={props.data} changeData={(e)=>props.changeData(e)}/>
      <Footer/>
    </div>
  )
}

export default ExploreRestaurant