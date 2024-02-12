import React, { useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { useLocation } from 'react-router-dom'
import './MoviesCardList.css'
import '../More/More.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import { useResize } from '../../utils/resizeHook'
import Preloader from '../Preloader/Preloader'

function MoviesCardList(props) {
    // const { width } = useWindowDimensions()
    const { width } = useResize()
    // console.log('MoviesCardList', width)
    const { pathname } = useLocation()
    const [displayedMovies, setDisplayedMovies] = useState(0);

    function defaultDisplayedMore() {
        // console.log('defaultDisplayedMore', width)
        if (width > 1280) {
            setDisplayedMovies(16);
        } else if (width < 1280 && width > 910) {
            setDisplayedMovies(12);
        } else if (width < 910 && width > 767) {
            setDisplayedMovies(8);
        } else if (width < 768) {
            setDisplayedMovies(5);
        } 
    }

    function showMore() {
        if (width > 1280) {
            setDisplayedMovies(displayedMovies + 4);
        } else if (width < 1280 && width > 910) {
            setDisplayedMovies(displayedMovies + 3);
        } else if (width < 910) {
            setDisplayedMovies(displayedMovies + 2);
        }
    }

    React.useEffect(() => {
        // console.log('useEffect', width)
        defaultDisplayedMore();
    }, [width]);

    // console.log('MoviesCardList2', props)
    return (
        <section className="cardList">
            <ul className="cardList__grid">
                {props.isLoading ? <Preloader /> :
                    !props.errorMessage  
                        ? (pathname === '/saved-movies')
                            ? props.filteredMovies.map((movie) => (
                                <MoviesCard 
                                    movie={movie}
                                    key={movie.movieId}
                                    handleSavedMovie={props.handleSavedMovie} 
                                    // handleDeleteMovie={props.handleDeleteMovie}
                                />
                            ))
                            : props.filteredMovies.slice(0, displayedMovies).map((movie) => (
                                <MoviesCard 
                                    movie={movie}
                                    key={movie.movieId}
                                    handleSavedMovie={props.handleSavedMovie} 
                                    // handleDeleteMovie={props.handleDeleteMovie}
                                />
                            ))
                        : <span className='gallery__serch-error'>{props.errorMessage}</span>   
                }
                {/* {props.isNothingFound && <span className="search__error">Ничего не найдено</span>} */}
                {/* {<MoviesCard filteredMovies={props.filteredMovies} isLiked={true} />} */}
            </ul>
            <div className="more">
                {props.filteredMovies.length > displayedMovies && pathname === '/movies' 
                ? (<button className="more__button" type="button" onClick={showMore}>Ещё</button>) : ('')}
            </div>
        </section>
    )
}

export default MoviesCardList;

// {props.cards.map((card) => (
//     <Card 
//         key={card._id}
//         _id={card._id}
//         likes={card.likes} 
//         name={card.name} 
//         link={card.link}
//         owner={card.owner} 
//         onDeleteCard={props.onDeleteCard} 
//         onCardClick={props.onCardClick} 
//         onCardLike={props.onCardLike}
//         onCardDelete={props.onCardDelete}
//     />
// ))}