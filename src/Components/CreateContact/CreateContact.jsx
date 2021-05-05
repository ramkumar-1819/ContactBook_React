//This Component is used to create a new Contact and update in the API
import React, { Component } from 'react';
import axios from 'axios';
import './CreateContact.css'
import {useSelector,useDispatch} from 'react-redux';
import {fetchUserContact} from '../Actions';

export default function CreateContact(){
    const userInfo=useSelector(state=>state.contact)         //Hold current contact datas of the user
    const dispatch=useDispatch()
    const initialData=useSelector(state=>state.initialData);
    const formHandler=(e)=>{
        //once the form is submitted perform Form Validation
        //And Form Validation is Sucess then updat the datas in the API
        e.preventDefault()
        const name=document.getElementById("name").value;
        const phone=document.getElementById("phone").value;
        const mail=document.getElementById("email").value
        if(name==="" || phone==="" || mail===""){
            alert("Fill All the Given Fields")
            return
        }
        const name_pattern=/^[A-Z]/g;
        const phone_pattern=/^[789]\d{9}$/g;
        const email_pattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
        if(!name_pattern.test(name)){
             alert("Name start with Capital Letter")
             return
        }
        if(!phone_pattern.test(phone)){
             alert("Phone Number start with [789] and total of 10 digits")
             return
        }
        let number_exist=false
        initialData.forEach(val=>{
            if(val.phone===phone){
                alert("Number already exist in List")
                number_exist=true
            }
        })
        if(number_exist===true){
            return
        }
        if(!email_pattern.test(mail)){
             alert("Enter a valid email id")
             return
        }


        //Updating the data in API
        const new_data=userInfo;
        new_data.push({"name":name,"phone":phone,"email":mail})
        axios.put(`https://60850e379b2bed001704180e.mockapi.io/Ram/${sessionStorage.getItem("id")}`,{
             datas:new_data
        })
        .then(res=>{
            //Once Update is finished the recall the fetchUserContact() to get the Contact datas with updated datas
            dispatch(fetchUserContact())
        })
        //Once the data is upadted the remove bluring the background and conatct form 
        //Make all the I/P value of CreateContact form as empty
        document.getElementsByClassName("bluring")[0].style.display="none";
        document.getElementsByClassName("contact")[0].style.display="none";
    }
    const closeHandler=()=>{
        //If close button of Contact Form is Clicked then
        //Remove bluring the background and Createcontact form
        document.getElementsByClassName("bluring")[0].style.display="none";
        document.getElementsByClassName("contact")[0].style.display="none";
    }
    return(
        <>
        <form className="contact" onSubmit={(e)=>formHandler(e)}>
                <b>Fill the Given Details<button id="close"type="button" onClick={closeHandler}>X</button></b>
                <input placeholder="Enter the Name" id="name"></input>
                <input placeholder="Enter the PhoneNumber" id="phone"></input>
                <input placeholder="Enter the Email-Id" id="email"></input>
                <button id="save"type="submit">Save</button>
            </form>
        </>
    )
}