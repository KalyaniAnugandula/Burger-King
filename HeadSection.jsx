import React, { Component } from "react";
import HeadData from "./HeadData";
class HeadSection extends Component{
  constructor(){
    super();
  }
  render(){
  return(
    <>
    <header> 
      <br /><br /><br /><br /><br />
             <div id="head-section-layout">
              {/* <br /><br /> */}
                <div id="head">
                    <span id="our-menu">OUR MENU</span>
                    <a id="see-all">See All<i className="fa-solid fa-angle-right"></i></a>
                </div>
                <div id="images">
                     <div id="left-slide-button"><i className="fa-solid fa-angle-left"></i></div>
                     {
        HeadData.map((item)=>{
            return(
                (
            <div id="img-card">
            <div id="imgs">
           <a id="img1" className="imgs"><img src={item.imgsrc} alt={item.alt} /></a>
         </div>
               <div className="desc">{item.des}</div>
             </div>
               )
            )
        })
      }           
              <div id="right-slide-button"><i className="fa-solid fa-angle-right"></i></div>
        </div>
             </div>
    </header>
    </>
  )}
}
export default HeadSection;