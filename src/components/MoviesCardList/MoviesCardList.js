import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList() {
    return (
        <section className="cardList">
            <ul className="cardList__grid">
                <MoviesCard isLiked={true} name={'33 слова о дизайне'}/>
                <MoviesCard isLiked={false} name={'33 слова о дизайне'}/>
                <MoviesCard isLiked={true} name={'33 слова о дизайне'}/>
                <MoviesCard isLiked={false} name={'33 слова о дизайне'}/>
                <MoviesCard isLiked={true} name={'33 слова о дизайне'}/>
                <MoviesCard isLiked={false} name={'33 слова о дизайне'}/>
                <MoviesCard isLiked={true} name={'33 слова о дизайне'}/>
                <MoviesCard isLiked={false} name={'33 слова о дизайне'}/>
            </ul>
        </section>
    )
}

export default MoviesCardList;