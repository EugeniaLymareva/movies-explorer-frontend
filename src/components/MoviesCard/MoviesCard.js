import Img from '../../images/pic__COLOR_pic.svg'
import React from 'react'
import { useLocation } from 'react-router-dom'
import './MoviesCard.css'

function MoviesCard({ isLiked, name }) {
    const location = useLocation()
    const moveSaveButtonClassName = (`mov-card__save ${isLiked && 'mov-card__save-active'}`)


    return (
        <>
            <li className="mov-card">
                <img className="mov-card__img" src={Img} alt={name} />
                <div className="mov-card__container">
                    <h3 className="mov-card__title">{name}</h3>
                    {location.pathname === '/movies' ? <button className={moveSaveButtonClassName} type="button"></button> :
                        <button className='mov-card__delete' type="button"></button>}
                </div>
                <p className="mov-card__time">1ч42м</p>
            </li>
        </>
    )
}

export default MoviesCard;