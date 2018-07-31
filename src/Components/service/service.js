import React from 'react';
import  './Service.css';

const Svr = (props) => {

    return ( <div className = "col-md-4 center">
    <div className="box">
        <div className="icon-class">
        <i className={props.iconclass}> </i>
        </div>
        <h1> { props.name } </h1>
        <p> {props.description} </p>
        </div>
    </div>
    );


}
export default Svr;