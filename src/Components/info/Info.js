import React from "react";
import "./Info.css";
const info=(props)=>
{
    return(
    <div className="col-md-3 info">
        <i className={props.logo}></i>
        <p>{props.name}</p>
        <h1>{props.num}</h1>
    </div>);
}


export default info;