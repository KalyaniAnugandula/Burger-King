import React,{Component} from "react";
import MainData from "./MainData";
class Main extends Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
         <div id="main-section">
            <div> </div>
        <div id="main-head">
           <span id="main-text"> KINGS DEALS OF THE DAY</span>
            </div>
        <div id="main-imgs">
         {
         MainData.map(a=>{
            return(
                <img src={a.imgs} alt={a.alt} width={350} height={190}></img>
            )
        })
         }
        </div>
        <div>
        <button id="main-button"> EXPLORE FULL MENU</button>
        </div>
      </div>
    )
}
}
export default Main;