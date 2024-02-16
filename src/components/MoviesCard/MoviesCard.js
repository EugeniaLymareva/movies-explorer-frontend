import React from 'react'
import { useLocation } from 'react-router-dom'
import './MoviesCard.css'

function MoviesCard(props) {
    const location = useLocation()
    const moveSaveButtonClassName = (`mov-card__save ${props.movie.isLiked && 'mov-card__save-active'}`)

    function formatDuration(durationInMinutes) {
        const hours = Math.floor(durationInMinutes / 60);
        const minutes = durationInMinutes % 60;

        const formattedHours = hours > 0 ? `${hours}ч` : '';
        const formattedMinutes = minutes > 0 ? `${minutes}м` : '';

        return formattedHours && formattedMinutes
            ? `${formattedHours}${formattedMinutes}`
            : formattedHours || formattedMinutes || '0м';
    }

    function handleMovie() {
        props.handleSavedMovie(props.movie)
    }

    return (
        <li className="mov-card">
            <a href={props.movie.trailerLink} target='blank'><img className="mov-card__img" src={`${props.movie.image}`} alt={props.movie.name} /></a>
            <div className="mov-card__container">
                <h3 className="mov-card__title">{props.movie.nameRU}</h3>
                {location.pathname === '/movies' ? <button className={moveSaveButtonClassName} onClick={handleMovie} type="button"></button> :
                    <button className='mov-card__delete' onClick={handleMovie} type="button"></button>}
            </div>
            <p className="mov-card__time">{formatDuration(props.movie.duration)}</p>
        </li>
    )
}

export default MoviesCard;