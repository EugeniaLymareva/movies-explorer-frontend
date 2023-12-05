import headerLogo from '../../images/header-logo.svg'
import accountIcon from '../../images/icon-account.svg'
import React from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { useWindowDimensions } from 'react-native';
import './Header.css'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

function Header({ isLoggedIn }) {
    const location = useLocation()
    // const navigate = useNavigate()
    const [windowSize, setWindowSize] = React.useState()
    const { width } = useWindowDimensions()

    React.useEffect(() =>{
        if(width > '768') {
            setWindowSize(true)
        } else {
            setWindowSize(false)
        }
    }, [width])

    return (
        <header className={`header ${location.pathname === '/' ? 'header__main' : ''}`}>
            <Link to="/"><img className="header__logo" src={headerLogo} alt="Логотип Diplom" /></Link>
            {isLoggedIn === false ? 
                (<><nav className= "header__nav">
                    <Link className="header__signup" to="/signup">Регистрация</Link>
                    <Link className="header__signin" to="/signin">Войти</Link>    
                </nav></>) : 
            
                (windowSize ? (
                    <><nav className="header__nav indentation">
                        <Link className={`header__link ${location.pathname === '/movies' ? 'header__link-active' : ''}`} to="/movies">Фильмы</Link>
                        <Link className={`header__link ${location.pathname === '/saved-movies' ? 'header__link-active' : ''}`} to="/saved-movies">Сохранённые фильмы</Link>
                    </nav><nav className="header__nav nav-form">
                            <Link className="header__account-link" to="/profile">Аккаунт</Link>
                            <img className={`header__icon ${location.pathname === '/' ? 'header__icon-main' : ''}`} src={accountIcon} alt="Иконка аккаунта" />
                        </nav></>) :

                    (<nav className= "header__nav">
                        <BurgerMenu />
                    </nav>)
                )
            }
        </header>
    )
}

export default Header;