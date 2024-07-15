// import './styles/NavStyle.css';

/**function togglePopup() {
    const popup = document.getElementById('popup');
    const mainContainer = document.getElementById('main_container');

    if (popup.style.display === 'none') {
        popup.style.display = 'block';
        mainContainer.classList.add('blur'); // Add blur class
    } else {
        popup.style.display = 'none';
        mainContainer.classList.remove('blur'); // Remove blur class
    }
}
    #main_container {
    background: rgba(0, 0, 0, 0.6); /* Semi-transparent background 
    filter: blur(2px); /* Apply blur effect 
}
    var myBlurFunction = function(state) {
    state can be 1 or 0 
    var containerElement = document.getElementById('main_container');
    var overlayEle = document.getElementById('overlay');

        if (state) {
        overlayEle.style.display = 'block';
        containerElement.setAttribute('class', 'blur');
    } else {
        overlayEle.style.display = 'none';
        containerElement.setAttribute('class', null);
    }
        <a href="javascript:myBlurFunction(1);">Blur</a>
        <a href="javascript:myBlurFunction(0);">No blur</a>
 */
 let NavBarData=()=>{
  
            let x=document.getElementById("showContent")
            x.style.display="block"
            // let m=document.getElementsByClassName('blur');
            // if(x.style.display=="block"){
            //     m.setAttribute('class','blur')
            // }
            // else{
            //     x.style.display = 'none';
            //     m.setAttribute('class','null')

            }
            // let z=document.getElementsByTagName('nav').style.filter="blur(30px)"
 
// NavBarData();
export default NavBarData ;