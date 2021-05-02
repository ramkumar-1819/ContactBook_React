import React, { Component } from 'react';
import './Auth.css';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Contact from '../Contact/Contact';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
//If route is Signin then we need to render this Login Component

function Login(){  
    return(
            <div className="n">
                    <div className="logo"></div>
                    <div className="auth">
                    <div>WELCOME TO CONTACT BOOK</div>
                    <SignIn/>
                    </div>
            </div>  
    )
}

//If route is Signup then we need to render this Signupp Component
function SignUpp(){   
    return(
        <div className="n">
                <div className="logo"></div>
                <div className="auth">
                <div>WELCOME TO CONTACT BOOK</div>
                <SignUp/>
                </div>
        </div>  
)
}

//This Auth Component is Used for Authentication Purpose
export default function Auth(){
    return(<>
    <Router>
            <Switch>
                <Route exact path="/">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <SignUpp/>
                </Route>
                <Route path="/signin">
                   <Login/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                
            </Switch>
    </Router>
    </>)
}