import StartFirebase from "./firebaseConfig";
import React from 'react';
import {ref, onValue} from 'firebase/database'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import ExploreRestaurant from './pages/ExploreRestaurant/ExploreRestaurant';
import ExtractMenu from './pages/ExtractMenu/ExtractMenu';
import Favorite from './pages/Favorite/Favorite';
import FindRestaurant from './pages/FindRestaurant/FindRestaurant';
import { useState } from "react";

export const LandingPage = (props) => {

    const [data, changeData] = useState(props.data)
    console.log(data)
  
    return (
        <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route
                index
                element={
                  <ExploreRestaurant
                    data={data}
                    changeData={(e) => changeData(e)}
                  />
                }
              />
              <Route
                path="favorite"
                element={
                  <Favorite
                    data={data}
                    changeData={(e) => changeData(e)}
                  />
                }
              />
              <Route path="extractmenu" element={<ExtractMenu />} />
              <Route
                path="findrestaurant"
                element={<FindRestaurant data={data} />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  };
  