import React,{Component} from 'react';
import Services from './Services';
import Details from './Details';
import News from '../Components/News/News';
import Navbar from '../Components/Navbar/Navbar';
import Backdrop from '../Components/UI/Backdrop/Backdrop';
import Sidebar from '../Components/Navbar/Sidebar/Sidebar';
import './App.css';

class App extends Component{

    state={
        sidebarDisplay:false
    }
    sidebarToggleHandler=(props)=>{
        this.setState({sidebarDisplay:true})
    }
    sideBarCloserHandler=()=>{
        console.log("thayu");
        this.setState({sidebarDisplay:false})
    }

   converter= () =>{
      let a= document.getElementById('num1').value;
      let ans= a/500000;
      document.getElementById('btc').innerHTML="Value in Bitcoins is "+ans;
   }
    render(){

        
const app=(
    
    <div className="container-fluid">
         <Sidebar raam={this.state.sidebarDisplay} />
         <Backdrop sideBarCloser={this.sideBarCloserHandler} sideBar={this.state.sidebarDisplay}>
        <Navbar sideBarToggle={this.sidebarToggleHandler}/>
        <Services />
        <News />
        <div className="calculator">
        <div className="black">
        <p> Bitcoin currency </p>
        <h1>Calculator</h1>
        <span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
eirmod tempor invidunt ut laboret dolore magna aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
eirmod tempor invidunt ut laboret dolore magna aliquyam erat.</span> <br />
        <input type="text" id="num1" placeholder="Enter the value in Rs"/> &nbsp; &nbsp; <p id="btc"> </p> <br />
        <input type="button" className="btn" onClick={this.converter} value="Convert"/>
        </div>
        </div>
        <div className="back-to-top">
        <i className="icon ion-md-arrow-up "/>
        </div>

        <Details />
        <footer> 
            <div className="footer-bottom row">
            <div className="row">
            <div className="footer-content">
            <div className="col-md-5">
            <p> © 2018 Bitcoin.com All copy rights are reserved. </p>
            </div>
            </div>
            </div>
            </div>
            </footer>
            </Backdrop>
        </div>
)

   return (<div> 
    {app}
     </div>);

    }
}
export default App;