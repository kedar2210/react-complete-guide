import React from 'react';
import './Backdrop.css';

const backdrop=(props)=>{
    if(props.sideBar)
    return(
        <div className="Backdrop" onClick={props.sideBarCloser}>
    {props.children}
    </div>
    )
    else return(
        <div>
         {props.children}   
            </div>
    )
}


export default backdrop;