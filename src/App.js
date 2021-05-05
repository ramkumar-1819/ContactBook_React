import Auth from "./Components/Authentication/Authentication";
import './App.css';
import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import axios from "axios";
import {dataFetching} from './Components/Actions';

function App() {
  const dispatch=useDispatch();
   
  useEffect(()=>{
    dispatch(dataFetching())
},[])
  return (
    <div className="App">
         <Auth/>
    </div>
  );
}

export default App;
