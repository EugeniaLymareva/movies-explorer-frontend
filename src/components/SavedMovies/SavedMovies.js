import React from 'react'
import './SavedMovies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import More from '../More/More'
import Footer from '../Footer/Footer'

function SavedMovies(){
    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList />
            <More />
            <Footer />
        </>
    )
}

export default SavedMovies;