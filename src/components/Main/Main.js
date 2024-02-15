import React from 'react'
import { useLocation } from 'react-router-dom'
import './Main.css'
import Header from '../Header/Header'
import Promo from '../Promo/Promo'
import NavTab from '../NavTab/NavTab'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Footer from '../Footer/Footer'


function Main(props) {
    const { pathname } = useLocation()

    if (props.isLoggedIn) {
        localStorage.setItem('lastPath', pathname)
    }

    return (
        <>
            <Header isLoggedIn={props.isLoggedIn} />
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Footer />
        </>
    )
}

export default Main;