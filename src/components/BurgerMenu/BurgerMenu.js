import React from 'react'
import './BurgerMenu.css'
import { Link, useLocation } from 'react-router-dom'
import accountIcon from '../../images/icon-account.svg'
import './BurgerMenu.css'

function BurgerMenu() {
    const location = useLocation()
    const [isOpen, setIsOpen] =  React.useState(false)

    function Navbar() {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    return (
        <nav className='burgermenu'>
            <div className='burgermenu__button-container'>
                <button type='button' className="burgermenu__button" onClick={Navbar} />
            </div>
            
            <nav className={`burgermenu__container ${isOpen ? 'burgermenu_opened' : ''}`}>
                <button type='button' className='burgermenu__close' onClick={Navbar} />
                <ul className='burgermenu__list'>
                    <li className='burgermenu__list-item'>
                        <Link className={`burgermenu__link ${location.pathname === '/' ? 'link-decoration' : ''}`} to={'/'} >Главная</Link>
                    </li>
                    <li className='burgermenu__list-item'>
                        <Link className={`burgermenu__link ${location.pathname === '/movies' ? 'link-decoration' : ''}`} to={'/movies'} >Фильмы</Link>
                    </li>
                    <li className='burgermenu__list-item'>
                        <Link className={`burgermenu__link ${location.pathname === '/saved-movies' ? 'link-decoration' : ''}`} to={'/saved-movies'} >Сохраненные фильмы</Link>
                    </li>
                    <li className='burgermenu__list-item'>
                        <Link className='burgermenu__link burgermenu__link-account' to={'/profile'} >Аккаунт</Link>
                        <img className='header__icon header__icon-burgermenu' src={accountIcon} alt="Иконка аккаунта" />
                    </li>
                </ul>
            </nav>
        </nav>
    )
}

export default BurgerMenu;