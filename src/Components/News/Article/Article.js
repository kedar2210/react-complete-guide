import React from 'react';
import './Article.css'

const article=(props)=>(
        <div className="col-md-3 Article">
        <div>
           <img src={props.src} alt=" didn't load"/> 
        </div> 
        <div className="clearfix">
        <p>Some content </p> <p style={{float: 'right'}}>more content </p></div>  
        <h3> {props.content} </h3> 
        
        </div>
);

export default article;