import React,{Component} from 'react';
import './News.css';
import Article from './Article/Article';
import img1 from '../../Assets/images/blog-1-1.jpg';
import img2 from '../../Assets/images/blog-1-2.jpg';
import img3 from '../../Assets/images/blog-1-3.jpg';
import img4 from '../../Assets/images/blog-1-4.jpg';

class News extends Component{

    state={
        items:[
            {
                src:img1,
                content:"Calculating bitcoins mining profitability"
            },
            {
                src:img2,
                content:"Calculating bitcoins mining profitability"
            },
            {
                src:img3,
                content:"Calculating bitcoins mining profitability"
            },
            {
                src:img4,
                content:"Calculating bitcoins mining profitability"
            }

        ]
    }

    render(){
        const art=(
            <div className="row News">
             <h1 className="text-center"> Latest News </h1> 
            {this.state.items.map((Val,index)=>{
                return(
                    <div>
                  
                <Article src={Val.src} content={Val.content}/>
                </div>
                );
            
            })
        }
                   </div>

        )
       
        return(
            <div>{art}</div>
        )
    }
    
} 

export default News;
