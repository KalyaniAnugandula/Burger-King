import React from "react";

import NavBar from "./Components/NavBar";
import HeadSection from './Components/HeadSection'
import Main from './Components/Main';
import BurgerKing_img from "./Components/BurgerKing_img";
import Footer from "./Components/Footer";

import './styles/NavStyle.css'
import './styles/HeadStyle.css'
import './styles/MainStyles.css'
import './styles/FooterStyles.css'

function App(){
    return(
        <>
        <NavBar />
        <HeadSection/>
        <Main />
        <BurgerKing_img />
        <Footer />
        </>
    )
}
export default App;
 