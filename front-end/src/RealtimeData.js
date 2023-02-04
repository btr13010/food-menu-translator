import StartFirebase from "./firebaseConfig";
import React from 'react';
import {ref, onValue} from 'firebase/database'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import ExploreRestaurant from './pages/ExploreRestaurant/ExploreRestaurant';
import ExtractMenu from './pages/ExtractMenu/ExtractMenu';
import Favorite from './pages/Favorite/Favorite';
import FindRestaurant from './pages/FindRestaurant/FindRestaurant';
import { LandingPage } from './LandingPage';


const db = StartFirebase();

export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        const dbRef =ref(db, 'Restaurant');

        onValue(dbRef, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                records.push(childSnapshot.val());
            });
            this.setState({tableData: records})
        })

        
    }

    render(){

        return (
          <LandingPage data={this.state.tableData}/>
        );
    }
}