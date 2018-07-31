import React,{Component} from "react";
import Info from "../Components/info/Info";
import "./Details.css";
 
class Details extends Component
{
    state={
        data:[
            {num:Math.floor((Math.random())*10000),
            name:"Total Transactions",
            logo:"icon ion-logo-usd icons1",
            key:1    
        },
        {num:Math.floor((Math.random())*10000),
            name:"Bitcoin Wallets",
            logo:"icon ion-md-wallet icons1",
            key:2    
        },
        {num:Math.floor((Math.random())*10000),
            name:"happy users",
            logo:"icon ion-md-heart icons1",
            key:3    
        },
        {num:Math.floor((Math.random())*10000),
            name:"Bitcoin Invstors",
            logo:"icon ion-md-people icons1",
            key:4    
        }
        ]


    }
    render(){
        let raam=null;
        raam=(
        <div className="row details">{
            this.state.data.map((val,index)=>
        {
            return(
                <Info
                name={val.name} 
                num={val.num}
                logo={val.logo}
                key={val.key}
                />
            );
        })}
        </div>
        )

        
        
        
        return(
            <div>{raam}</div>
        )}
        

}
export default Details;