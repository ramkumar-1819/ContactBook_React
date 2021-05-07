//This Component display datas based on the Search values
import React, { Component } from 'react';
import './Search.css'
import {useSelector,useDispatch} from 'react-redux';
import {CancelFilter} from '../CancelFilter';      //Remove sort options and Deselecting checkboxes


export default function Search(){
    //initialData -- contain Initial ContactDatas got from API based on User Id
    //newData -- This array hold datas based on search

    const initialData=useSelector(state=>state.initialData);    
    const dispatch=useDispatch();
    let newData=[];                                                 

    const changeHandler=(e)=>{  
        console.log(initialData)    
        //This Function executes once the Input Search field is Changed                                   
        //If the I/P is empty then display all the datas
        //else display datas based on the search
        //If sorting option or checkbox is applied then remove everything.
        if(e.target.value===""){  
           CancelFilter();                                 
           [...newData]=initialData;
           dispatch({type:"Option",option:""})
           dispatch({type:"Contact",values:newData})
           //Removing Sort if Applied
        document.getElementsByClassName("popupSection")[0].style.display="none";
        document.getElementsByClassName("delete")[0].style.display="none";
        }

        else{
            newData=[]                                        
            var pattern=new RegExp(`${e.target.value}`,"gi");  
            for(var data of initialData){
                //Test for the datas based on I/P search value
                //If found add it into the array
                if(pattern.test(data.name)){                  
                    newData.push(data)
                    continue;
                }
                else if(pattern.test(data.phone)){
                    newData.push(data)
                    continue;
                }
                else if(pattern.test(data.email)){
                    newData.push(data)
                    continue;
                }
            }
        }
    }
    const clickHandler=()=>{
        //This Function executes once the search button is clicked
        //If no match found then display no match found
        //else
        //display the matched datas that we have in the array   
        //Deselecting the checkboxes if we are going to search for a contact
        CancelFilter()
        if(document.getElementById("searchedValue").value===""){
            alert("Please Enter Some Value to Search")
        }
        else{
            if(newData.length===0){
                document.getElementsByClassName("popupSection")[0].style.display="flex";      
            }
            else{
                document.getElementsByClassName("popupSection")[0].style.display="none";
            }
            dispatch({type:"Contact",values:newData})
            dispatch({type:"Option",option:""})
        }
    }


    return(
        <>
        <div id="searchbar">
                <input type="text" placeholder="Enter Name or PhoneNumber or Email to search" id="searchedValue" onChange={(e)=>changeHandler(e)}></input>
                <button type="button" onClick={clickHandler}>SEARCH</button>
        </div>
        <div className="popupSection">
                <div>No Match Found</div>
            </div>
        </>
    )
}