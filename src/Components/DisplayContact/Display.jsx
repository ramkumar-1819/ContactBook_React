//This Component is used to display the Contact Datas of user login'ed
//If Search or creacte contact is performed then everything comes to default

import React, { Component,useContext,useState } from 'react';
import './Display.css';
import Edit from '../EditContact/Edit';
import Sort from '../Sort/Sort';
import axios from 'axios';
import{useSelector,useDispatch} from 'react-redux';
import {fetchUserContact} from '../Actions';

export default function Display(){
    const dispatch=useDispatch()
    const userInfo=useSelector(state=>state.contact);                        //Hold Current Contact Datas of user
    const initialData=useSelector(state=>state.initialData)                  //Hold initialy fetched datas
    const[index,setIndex]=useState("")                                       //Hold the index of selected contact that we choosen for edit
    const[data,setData]=useState({name:"",phone:"",email:""})                //Initially we are kepting everything as empty ,Once the edit option is selected it hold the selected option values
 
    const checkHandler=(e)=>{
        //This function execute when the main Checkbox is selected
        //This function purpose is to show/hide the delete button
        //based on the wheather the check box is selected or not
        //and Select all the checkbox once main checkbox is selected                                            
        if(e.target.checked===true){
            document.getElementsByClassName("delete")[0].style.display="inline";
        }
        else{
            document.getElementsByClassName("delete")[0].style.display="none";
        }
        const allCheckbox=document.querySelectorAll(".chkbox");
        for(var box of allCheckbox){
            box.checked=e.target.checked
        }
    }
    const deleteParticular=(e)=>{
        //This function execute once the particular checkbox is selected
        let tick=false;
        const allCheckbox=document.querySelectorAll(".checkboxes");
        for(var boxes of allCheckbox){
            if(boxes.checked===true){
                tick=true;
                break;
            }
        }
        if(tick===true){
            document.getElementsByClassName("delete")[0].style.display="inline";
        }
        else{
            document.getElementsByClassName("delete")[0].style.display="none";
        }
    }
    const clickHandler=(index)=>{
        //This fucntion execute when edit option is clicked
        document.getElementsByClassName("bluring")[0].style.display="block"
        document.getElementsByClassName("edit")[0].style.display="flex";
        setData(userInfo[index])  //setting the datas of selected contact for edit
        setIndex(index)           //setting the index of selected contact for edit
    }

    const deleting=()=>{
        //This fucntion executes When delete button is clicked
        //Purpose is to delete the Contact datas and update it in the API
        var deletedList_index=[];                                       //This Array hold index of contact which are all going to delete
        const allCheckbox=document.querySelectorAll(".checkboxes");
        allCheckbox.forEach((val,ind)=>{
                if(val.checked===true){
                    deletedList_index.push(ind)
                }  
        })
        let deletedList=[]
        deletedList_index.forEach(value_0=>{
                deletedList.push(userInfo[value_0])
        })
        initialData.forEach((value,index)=>{
            deletedList.forEach((val,ind)=>{
                  if(val.phone===value.phone){
                      initialData[index]=undefined
                  }
            })
        })
        let updated_datas=initialData.filter(val=>val!==undefined)
        //Updating the datas in the API
        axios.put(`https://60850e379b2bed001704180e.mockapi.io/Ram/${sessionStorage.getItem("id")}`,{
            datas:updated_datas
        })
        .then(res=>{
             dispatch(fetchUserContact())  //calling because to hold the datas with updation
             const removeCheckboxTick=document.querySelectorAll(".chkbox");
             for(var tick of removeCheckboxTick){
                 tick.checked=false        
             }
            document.getElementById("searchedValue").value="";
            document.getElementsByClassName("delete")[0].style.display="none";
            dispatch({type:"Option",option:""})
        })  
    }
    const sorting=()=>{
        //This function show the Sort option form
        document.getElementsByClassName("bluring")[0].style.display="block";
        document.getElementsByClassName("sort")[0].style.display="flex";
    }

    return(
        <>
        <div className="filter-delete">
                  <button className="filters" onClick={sorting}>SORTBY</button>
                  <button className="delete" onClick={deleting}>DELETE</button>
        </div>
        <Sort/>
        <div className="mainPage">
        <table>
            <thead>
                <tr>
                    <th><input type="checkbox" className="chkbox" onClick={(e)=>checkHandler(e)}></input></th>
                    <th>Name</th>
                    <th>PhoneNumber</th>
                    <th>Email-Id</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                    {userInfo.map((value,index)=>{
                        return(
                            <tr key={index}>
                            <td><input type="checkbox"  className="chkbox checkboxes" onClick={(e)=>deleteParticular(e)}></input></td>
                            <td>{value.name}</td>
                            <td>{value.phone}</td>
                            <td>{value.email}</td>
                            <td><div className="minus" onClick={()=>clickHandler(index)}>-</div></td>
                            </tr>
                        )
                    })}
            </tbody>
            </table>
            <Edit datas={data} index={index}/>
            </div>
        </>
    )
}