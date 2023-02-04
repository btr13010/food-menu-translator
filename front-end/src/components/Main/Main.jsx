import React from 'react';
import './Main.css';
import Table from '../Table/Table';

const Main = (props) => {
  console.log(props.restaurantData)
  return (
    <div className='Main'>
      <Table data={props.restaurantData} changeData={(e)=>props.changeData(e)}/>
    </div>
  )
}

export default Main
