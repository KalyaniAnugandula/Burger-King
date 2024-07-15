import Footer2Data from "./Footer2Data";
import FooterData from "./FooterData";

let Footer=()=>{
   return(
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="dis-con"><span id="disclaimer">Disclaimer :</span><span id="footer-dis"> All Images used are illustrative and strictly for representational purposes only</span></div>

   <footer>

    {
        FooterData.map(des=>{
            return(
             <table>
             <tbody id="tbody">
                <tr style={{width:"5vw"}}>
                    <th>{des.head}</th> 
                </tr>
                <tr>
                    <td>{des.abt}
                        
                    </td>
                </tr>

                <tr>
                <td>{des.write}</td>
                </tr>

                <tr>
                <td>{des.taste}</td>
                </tr>

                    <tr>
                        <td>{des.queries}</td>
                    </tr>
                    <tr>
                        <td>{des.inv}</td>
                    </tr>
                    <tr>
                        <td>{des.franch}</td>
                    </tr>
            </tbody>
         </table>)
 } )
}
   </footer>
   <div id="hr">
    <hr />
</div>
<div id="last">
    <img src="https://www.burgerking.in/static/media/BK_LOGO_PRIMARY_%C2%AE_ST_MAYO_EGG_WHITE_RGB.07fd3a3a.PNG" alt="" width={80} />
    <span id="footer-text">TM'&2024 BURGER KING COMPANY LLC.All Rights Reserved</span>
  <div id="icons">
    {
        Footer2Data.map(s=>{
            return(
          <img src={s.img} alt={s.alt} width={40}></img>
          )  }
               
        )
    }
    </div>
</div>
   </>
   )
}
export default Footer;
// // let App=()=>{
//   return(
//        <table border={2}>
//         {data.map(res=>{
//           return(
//              <thead key={res.id}>
//                <tr>
//                 <td>{res.id}</td>
//                 <td>{res.name}</td>
//                 <td>{res.email}</td>
//                 <td>{res.address}</td>
//                </tr>
//              </thead>
//           );
//  })} </table>