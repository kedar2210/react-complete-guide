import React from 'react';
import './Sidebar.css';

const sidebar=(props)=>{
        if(props.raam){
            return(
                <div className="Sidebar open" id="sb">
                JAY RAAM
                </div>
                    );
        }
       else 
       return(
            <div className="Sidebar close" id="sb">
            JAY RAAM
            </div>
       ) ;
       
};

export default sidebar;