import {Link} from 'react-router-dom';
import './SignIn.css'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {fetchParticularData} from '../Actions';

export default function SignIn(){
   const dispatch=useDispatch()
   const userdatas=useSelector(state=>state.datas)
   console.log(userdatas.datas)
    //When Login form is Submitted this function is called
    const submitLoginHandler=(e)=>{
        e.preventDefault()
        
        //Performing form validation using RegExp
        if(document.getElementById("usrname").value===""){
            alert("Username Shouldn't Empty")
            document.getElementById("usrname").focus()
            return
        }
        else if(document.getElementById("pass").value===""){
            alert("Password Shouldn't Empty")
            document.getElementById("pass").focus()
            return
        }
        //After form Validation is Successfull we need to check data provided by the user is available in the api
        //If data is available we proceed to contact page
        //Else User need to SignUp
            if(userdatas.type==="Failure"){
                alert("Problem in API please try after sometimes")
            }
            else{
                for(var data of userdatas.datas){
                    if(data.name===document.getElementById("usrname").value){
                        if(data.password===document.getElementById("pass").value){
                            dispatch(fetchParticularData(data.id))
                            document.getElementsByClassName("blurSignin")[0].style.display="block";
                            document.getElementsByClassName("popupSignin")[0].style.display="flex";
                            break;
                        }
                        else if(data.password!==document.getElementById("usrname").value){
                            alert("Password Missmatching")
                            document.getElementById("pass").focus()
                            break;
                            
                        }
                        else{
                            alert("Username Not Exist")
                            document.getElementById("usrname").focus()
                            break;
                        }
                    }
                }
            }
    }
    //This SignIn component actually shows the Login form to signin and a popup box will apppear after sigin successfull
    return(
    <div className="login">
    <div className="login-name">LOGIN</div>
            <form className="form" onSubmit={(e)=>submitLoginHandler(e)}>
                <input id="usrname"type="text" placeholder="Enter UserName"></input>
                <input id="pass" type="password" placeholder="Enter Password"></input>
                <button type="submit" className="login-button">Login</button>
                <div>Not a Member?<Link to="/signup">SignUp</Link></div>
            </form>

            <div className="blurSignin"></div>
            <div className="popupSignin">
                <div>Login Successfull</div>
                <div><Link to="/contact"><button>OK</button></Link></div>
            </div>
            </div>)
}