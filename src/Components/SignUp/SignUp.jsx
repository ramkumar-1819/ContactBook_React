import {Link} from 'react-router-dom';
import './SignUp.css'
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {dataFetching} from '../Actions';   //store the user and his datas in the API 

export default function SignUp(){
    const dispatch=useDispatch();
    const getdata=useSelector(state=>state.datas)
    const userdatas=getdata.datas;
    //When signup form is Submitted we call this method
    
    const submitHandler=(e)=>{
        e.preventDefault()
        //Performing Form Validation using RegExp
        const username_pattern=/[\w\W]{5,}/g;
        const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/g;
        
        if(!username_pattern.test(document.getElementById("newusr").value)){
            alert("Username must be minimum of 5 characters length")
            document.getElementById("newusr").focus()
            return false
        }
        if(!password_pattern.test(document.getElementById("newpass").value)){
            alert("Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character and no space and length must br 8-15")
            document.getElementById("newpass").focus()
            return false
        }
        if(document.getElementById("newpass").value!==document.getElementById("repass").value){
            alert("Password is Not matching")
            document.getElementById("repass").focus()
            return false
        }
        //After Form Validation is Successfull we need to post user details to the api 
        else{
            for(var data of userdatas){
                if(data.name===document.getElementById("newusr").value){
                    if(data.password===document.getElementById("newpass").value){
                        alert("Usename and Password already exist kindly Login to continue")
                        return
                    }
                }
            }
            //After posting user details popup box appear to show account created
            axios.post("https://60850e379b2bed001704180e.mockapi.io/Ram",{
                "name":document.getElementById("newusr").value,
                "password":document.getElementById("newpass").value,
                "datas":[]
            })
            .then(res=>{
                dispatch(dataFetching())  //calling this action to store the user and his datas in the store as a new member
                document.getElementsByClassName("blur")[0].style.display="block";
                document.getElementsByClassName("popup")[0].style.display="flex";
            })
            .catch(err=>console.log(err))
        }
        
    }
    //This component actually get details from user for signuping and post user data after successfully created an account
    return(
    <div className="Signup">
         <div className="Signup-name">SIGN-UP</div>
            <form className="forms" onSubmit={(e)=>submitHandler(e)}>
                <input id="newusr" type="text" placeholder="Create UserName"></input>
                <input id="newpass" type="password" placeholder="Create Password"></input>
                <input id="repass" type="password" placeholder="ReType-Password"></input>
                <button type="submit" className="signup-button">SignUp</button>    
                <div>Already a member?<Link to="/signin">Login</Link></div>
            </form>
            <div className="blur"></div>
            <div className="popup">
                <div>Account Creation Successfull</div>
                <div><Link to="/signin"><button>OK</button></Link></div>
            </div>
            </div>)
    
    
}