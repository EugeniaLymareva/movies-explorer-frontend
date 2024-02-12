import React from 'react'
import './SavedMovies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'

function SavedMovies(props){
    const [isCheck, setIsCheck] = React.useState(false)
    const [isCheckfilteredMovies, setIsCheckFilteredMovies] = React.useState([])
    const [search, setSearch] = React.useState('')
    const searchKey = 'saved-movies'


    React.useEffect(() => {
        console.log('BEST USE_FFECT EVER')
        if(props.savedMoviesLoaded) {
            handleIsCheckFilteredMovies(props.savedMovies, search)
        } 
    }, [isCheck, props.savedMoviesLoaded, props.savedMovies])

    // React.useEffect(() => {
    //     console.log('Movie component savedMoviesLoaded useEffect')
    //     if(props.savedMoviesLoaded && !props.savedMovies.length) {
    //         props.savedMovies()
    //     } 
    //   }, [props.savedMoviesLoaded])


    function filterMovies(search, savedMovies) {
        setSearch(search)
        handleIsCheckFilteredMovies(savedMovies, search)
    }

    function handleSavedMovie(movie) {
        props.handleDeleteMovie(movie.movieId)
    }

    function handleIsCheckFilteredMovies(savedMovies, search) {
        console.log('handleIsCheckFilteredMovies')
        props.setErrorMessage('')
        const filteredMovies = props.handleSearchMovies(savedMovies, search, isCheck)

        if (!filteredMovies.length) {
            props.setErrorMessage('Сохраненные фильмы не найдены')
        }

        setIsCheckFilteredMovies(filteredMovies.map((movie) => {
            return {
                ...movie,
                isLiked: true,
            }
        }))
    }

    return (
        <>
            <Header isLoggedIn={true} />
            <SearchForm 
                searchMovies={filterMovies} 
                savedMovies={props.savedMovies} 
                isCheck={isCheck} 
                setIsCheck={setIsCheck} 
                searchKey={searchKey}/>
            <MoviesCardList
                filteredMovies={isCheckfilteredMovies}
                errorMessage={props.errorMessage}
                handleSavedMovie={handleSavedMovie}
            />
            <Footer />
        </>
    )
}

export default SavedMovies;