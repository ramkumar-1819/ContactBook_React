import React, {useState,useEffect } from 'react';
import './Contact.css'
import img from '../contact-book-2415199-2031455.png';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';

export default function Contact(){

  const [data,setData]=useState([])
    useEffect(()=>{
        if(getItems!==""){
            sessionStorage.setItem("id",getItems.datas)
        }
        axios.get(`https://60850e379b2bed001704180e.mockapi.io/Ram/${sessionStorage.getItem("id")}`)
        .then(res=>{
             setData(res.data.datas)
        })
    },[])
    const getItems=useSelector(state=>state.userdata);
    
    const creatingContact=()=>{
        document.getElementsByClassName("bluring")[0].style.display="block";
        document.getElementsByClassName("contact")[0].style.display="flex";
    }
    const closeHandler=()=>{
        document.getElementsByClassName("bluring")[0].style.display="none";
        document.getElementsByClassName("contact")[0].style.display="none";
    }

    return(
        <div className="contactPage">
            <div className="bluring"></div>
            <form className="contact">
                <b>Fill the Given Details<button id="close"type="button" onClick={closeHandler}>X</button></b>
                <input placeholder="Enter the Name" id="name"></input>
                <input placeholder="Enter the PhoneNumber" id="phone"></input>
                <input placeholder="Enter the Email-Id" id="email"></input>
                <button type="submit">Save</button>
            </form>
            
            <div className="header">
                 <div className="logos">
                    <img src={img} alt="logo"/>
                    <div>ContactBook</div>
                 </div>
                 <button type="button" onClick={creatingContact}>Create Contact</button>
            </div>
            <div id="searchbar">
                <input type="text" placeholder="Enter Name or PhoneNumber or Email to search"></input>
                <button type="button">SEARCH</button>
            </div>
            <div className="filter-delete">
                  <button className="filters">SORTBY</button>
                  <button className="delete">DELETE</button>
            </div>
            <table className="mainPage">
                <tr>
                    <th>Name</th>
                    <th>PhoneNumber</th>
                    <th>Email-Id</th>
                    <th>Edit</th>
                </tr>
                <tr>
                    {data.map(value=>{
                        return(
                            <>
                            <td>{value.name}</td>
                            <td>{value.phone}</td>
                            <td>{value.email}</td>
                            <td>-</td>
                            </>
                        )
                    })}
                </tr>
            </table>
            
        </div>
    )
}