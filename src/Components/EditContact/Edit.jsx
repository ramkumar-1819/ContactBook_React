//This Function is used to edit the Contact datas and update in the API

import React, { Component,useContext, useState,useEffect } from 'react';
import './Edit.css'
import{useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import {fetchUserContact} from '../Actions';
import {CancelFilter} from '../CancelFilter';

export default function Edit(props){
    const initialData=useSelector(state=>state.initialData); //Initialy fetched datas
    const dispatch=useDispatch();
    var new_datas=[]  //Contain new Datas after performing edit                                                                                                     
    
    useEffect(()=>{
        //selected contact values is shown in I/P field of EditContact form
        document.getElementById("namefield").value=userdatas.name;
        document.getElementById("phonefield").value=userdatas.phone;
        document.getElementById("emailfield").value=userdatas.email;
    })
    
    const userInfo=useSelector(state=>state.contact)                    //Hold Current Contact datas of user
    const userdatas=props.datas;                                        //Hold the datas of selected contact for edit
    const index=props.index;                                            //Hold the Currently selected contact for edit's index
    const datas=userInfo;                                               //Hold Current Conatct Datas   
    
    const closeButton=()=>{
        //When exit button is clicked from the edit Contact form
        document.getElementsByClassName("edit")[0].style.display="none";
        document.getElementsByClassName("bluring")[0].style.display="none";
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        //When Edit Contact form is submitted 
        //perform Form Validation
        //Update the datas in the API
        const name=document.getElementById("namefield").value;
        const phone=document.getElementById("phonefield").value;
        const email=document.getElementById("emailfield").value;

        if(name==="" || phone==="" || email===""){
            alert("Fill out All the Given Fields")
            return
        }
        const ex_phoneData=userdatas.phone;

        initialData.forEach((val,index)=>{
            if(ex_phoneData===val.phone){
                initialData[index]={name:name,phone:phone,email:email}
            } 
        })
        new_datas=initialData 
        CancelFilter();
        document.getElementById("searchedValue").value=""
        dispatch({type:"Option",option:""})
        updatingDatas()
    }

    const removeHandler=()=>{
        //When Remove Contact Button is Clicked
        CancelFilter()
        const removeContact=datas[index].phone;
        initialData.forEach((value,index)=>{
            if(value.phone===removeContact){
                initialData[index]=undefined
            }
        new_datas=initialData.filter(val=>val!==undefined)
        })
        document.getElementById("searchedValue").value=""
        dispatch({type:"Option",option:""})
        updatingDatas()
    }

    const updatingDatas=()=>{
        //Updating the Datas in the API
        axios.put(`https://60850e379b2bed001704180e.mockapi.io/Ram/${sessionStorage.getItem("id")}`,{
            datas:new_datas
        })
        .then(res=>{
             dispatch(fetchUserContact())
             document.getElementsByClassName("bluring")[0].style.display="none";
             document.getElementsByClassName("edit")[0].style.display="none";
        })
    }

    return(
        <>
        <form className="edit" onSubmit={(e)=>submitHandler(e)} >
                <b>Edit Contact<button id="closebutton"type="button" onClick={closeButton}>X</button></b>
                <input placeholder="Enter the Name" id="namefield" defaultValue={userdatas.name}></input>
                <input placeholder="Enter the PhoneNumber" id="phonefield" defaultValue={userdatas.phone}></input>
                <input placeholder="Enter the Email-Id" id="emailfield" defaultValue={userdatas.email}></input>
                <button id="save-edited" type="submit">Update</button>
                <b>OR</b>
                <button id="remove" type="button" onClick={removeHandler} >Remove Contact</button>
            </form>
        </>
    )
}