//This Component usually show the datas based on sort option

import React, { Component } from 'react';
import './Sort.css'
import {useSelector,useDispatch} from 'react-redux';

export default function Sort(){             

    const dispatch=useDispatch()
    const contact=useSelector(state=>state.contact);                //This hold the Currrent Contactdatas 
    const initialData=useSelector(state=>state.initialData);        //This hold the initial Contactdatas 
    const lastAppliedSort=useSelector(state=>state.lastApplied);    //This hold the lastApplied Sort option
    let optionSelected;                                             //This variable hold which sort option that we select from the given options
    
    const applySorting=()=>{                                        //This function execute when apply sort button is clicked
        const getRadioButton=document.getElementsByName("sortby");  //This variable hold all the radio buttons elements
        for(var button of getRadioButton){
            if(button.checked===true){
                optionSelected=button;
            }
        }
        if(optionSelected===undefined){                             //If None of the option is selected then we show alert msg
            alert("Select any one option")
        }
        else{
            if(optionSelected.value==="recently"){                  //If the selected sort is recent then reverse the default datas 
                let newContact_index=[]
                let newContact=[]
                contact.forEach((value_0,index_0)=>{
                    initialData.forEach((value_1,index_1)=>{
                        if(value_1.phone===value_0.phone){
                            newContact_index.push(index_1)
                        }
                    })
                })
                newContact_index.sort((a,b)=>a-b)
                newContact_index.forEach(val=>{
                    newContact.push(initialData[val])
                })
                newContact.reverse()
                dispatch({type:"Option",option:"recently"}) 
                dispatch({type:"Contact",values:newContact})
            }
            else if(optionSelected.value==="default"){              //If the selected sort is default the show datas by defaulty we insert                     
                let newContact_index=[]
                let newContact=[]
                contact.forEach((value_0,index_0)=>{
                    initialData.forEach((value_1,index_1)=>{
                        if(value_1.phone===value_0.phone){
                            newContact_index.push(index_1)
                        }
                    })
                })
                newContact_index.sort((a,b)=>a-b)
                newContact_index.forEach(val=>{
                    newContact.push(initialData[val])
                })
                dispatch({type:"Option",option:"default"})
                dispatch({type:"Contact",values:newContact})
            }
            else if(optionSelected.value==="a-z"){                  //If the option is A-Z the show datas alphabatically          
                const newContact=[]
                contact.sort((a,b)=>(a.name>b.name)?1:-1)
                contact.forEach(val=>{
                    newContact.push(val)
                })
                dispatch({type:"Option",option:"a-z"})
                dispatch({type:"Contact",values:newContact})
            }
            else if(optionSelected.value==="z-a"){                  //If the option is Z-A the show datas alphabatically reverse
                const newContact=[]
                contact.sort((a,b)=>(a.name>b.name)?-1:1)
                contact.forEach(val=>{
                    newContact.push(val)
                })
                dispatch({type:"Option",option:"z-a"})
                dispatch({type:"Contact",values:newContact})
            }

            document.getElementsByClassName("bluring")[0].style.display="none";       //Remove Bluring the background once we applied the sort option
            document.getElementsByClassName("sort")[0].style.display="none";          //Hide the sort form once sort option is selected
        }
    }             
    const exit=()=>{                                                   //This function execute once the exit button from sort Option is clicked
        //If Previously we dont't select any sort option means the leave
        //all the radio button as unchecked(unselected)
        //else
        //Checked(select) the radio button that is selected Previously
        
        if(lastAppliedSort===""){                                   
            const radio=document.getElementsByName("sortby");
            for(var x of radio){
                x.checked=false
            }
        }
        else{
            if(lastAppliedSort==="a-z"){
            document.getElementsByName("sortby")[0].checked=true;
            }
            else if(lastAppliedSort==="z-a"){
                document.getElementsByName("sortby")[1].checked=true;
            }
            else if(lastAppliedSort==="recently"){
                document.getElementsByName("sortby")[2].checked=true;
            }
            else if(lastAppliedSort==="default"){
                document.getElementsByName("sortby")[3].checked=true;
            }
        }
        document.getElementsByClassName("sort")[0].style.display="none";
        document.getElementsByClassName("bluring")[0].style.display="none";
    }
    return(
        <>
        <form className="sort">
            <h3>Sort<button id="exit"type="button" onClick={exit}>X</button></h3>
            <label><input type="radio" name="sortby" value="a-z" ></input> By Name (A-Z)</label>
            <label><input type="radio" name="sortby" value="z-a"></input> By Name(Z-A)</label>
            <label><input type="radio" name="sortby" value="recently"></input> By Date(Recently Added)</label>
            <label><input type="radio" name="sortby" value="default"></input> By Date(Added First/Default)</label>
            <button type="button" onClick={applySorting}>Apply</button>
        </form>
        </>
    )
}