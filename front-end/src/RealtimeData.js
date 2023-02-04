import StartFirebase from "./firebaseConfig";
import React from 'react';
import {ref, onValue} from 'firebase/database'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import ExploreRestaurant from './pages/ExploreRestaurant/ExploreRestaurant';
import ExtractMenu from './pages/ExtractMenu/ExtractMenu';
import Favorite from './pages/Favorite/Favorite';
import FindRestaurant from './pages/FindRestaurant/FindRestaurant';


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

        return(
            <div className="App">
                {/* <div className="AppGlass"> */}
                    <BrowserRouter>
                        <Routes>
                            <Route path='/'>
                                <Route index element={<ExploreRestaurant data={this.state.tableData} changeData={(e)=>this.setState(e)}/>}/>
                                <Route path='favorite' element={<Favorite data={this.state.tableData} changeData={(e)=>this.setState(e)}/>}/>
                                <Route path='extractmenu' element={<ExtractMenu/>}/>
                                <Route path='findrestaurant' element={<FindRestaurant/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                {/* </div> */}
            </div>
        )
    }
}