import React from "react"; 
import { Redirect, Route } from "react-router";
import auth from "../auth";

function ProtectedRoute ({component: Component, ...rest}){
    return (
        <Route {...rest} render = {(props) => {
            if(auth.isAuthenticated()){
                return <Component {...props}/>
            } else {
                return <Redirect to={"/login"}/>
            }
        }}/>
    )
}

export default ProtectedRoute;