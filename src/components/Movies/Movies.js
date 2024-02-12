import React from 'react'
import moviesApi from '../../utils/MoviesApi'
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'

function Movies(props) {
    const [isLoading, setIsLoading] = React.useState(false)
    const [allMovies, setAllMovies] = React.useState(
        localStorage.getItem('allMovies') ? JSON.parse(localStorage.getItem('allMovies')) : []
    )
    const [isCheckfilteredMovies, setIsCheckFilteredMovies] = React.useState([])
    const [isCheck, setIsCheck] = React.useState(localStorage.getItem('shorts') === 'true')
    const searchKey = 'movie'
    const shortsKey = 'shorts'
    
    function getAllMovies(search) {
        if (!allMovies.length) {
            setIsLoading(true)
            moviesApi.getMovies()
                .then(response => {
                    setAllMovies(response)
                    localStorage.setItem('allMovies', JSON.stringify(response))
                    handleIsCheckFilteredMovies(response, search)
                })
                .catch((err) => {
                    props.setErrorMessage('Ошибка загрузки данных с сервиса beatfilm-movies!')
                    console.log(err)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        } else {
            handleIsCheckFilteredMovies(allMovies, search)
        }
    }

    // React.useEffect(() => {
    //     console.log('Movie component initial useEffect 1')
    //     if (allMovies.length && localStorage.getItem(searchKey)) {
    //         handleIsCheckFilteredMovies(allMovies, localStorage.getItem(searchKey))
    //     }
    // }, [])
    //
    // React.useEffect(() => {
    //     console.log('Movie component savedMoviesLoaded useEffect 2', props.savedMoviesLoaded)
    //     if(localStorage.getItem(searchKey) && props.savedMoviesLoaded && !allMovies.length) {
    //         getAllMovies(localStorage.getItem(searchKey), props.savedMovies)
    //     }
    //   }, [props.savedMoviesLoaded])

    React.useEffect(() => {
        console.log('Movie component change isCheck and savedMovies useEffect 3', allMovies)
        const searchMovie = localStorage.getItem(searchKey)
        if (allMovies.length && searchMovie) {
            handleIsCheckFilteredMovies(allMovies, localStorage.getItem(searchKey))
        }
    }, [isCheck, props.savedMovies, props.savedMoviesLoaded])

    function handleIsCheckFilteredMovies(allMovies, search) {
        props.setErrorMessage('')
        const filteredMovies = props.handleSearchMovies(allMovies, search, isCheck)
        if (!filteredMovies.length) {
            props.setErrorMessage('Ничего не найдено!')
        }

        setIsCheckFilteredMovies(filteredMovies.map((movie) => {
            const isLiked = !!props.savedMovies.find((savedMovie) => savedMovie.movieId === movie.id)
            const thumbnail = `${moviesApi.getImageUrl()}${movie.image.formats.thumbnail.url}`
            const imageSmall = movie.image.formats.small 
            ? `${moviesApi.getImageUrl()}${movie.image.formats.small.url}` : thumbnail
            return {
                ...movie,
                movieId: movie.id,
                image: imageSmall,
                thumbnail,
                isLiked,
            }
        }))
    }

    function handleSavedMovie(movie) {
        const { id, created_at, updated_at, isLiked, ...restMovie } = movie
        if (isLiked) {
            props.handleDeleteMovie(restMovie.movieId)
        } else {
            props.handleSaveMovie(restMovie)
        }
    }
 
    return (
        <>
            <Header isLoggedIn={true} />
            <SearchForm 
                searchMovies={getAllMovies} 
                savedMovies={props.savedMovies} 
                isCheck={isCheck}
                setIsCheck={setIsCheck}
                searchKey={searchKey}
            />
            <MoviesCardList 
                filteredMovies={isCheckfilteredMovies}
                handleSavedMovie={handleSavedMovie}
                errorMessage={props.errorMessage}
                isLoading={isLoading}
            />
            <Footer />
        </>
    )
}

export default Movies;
