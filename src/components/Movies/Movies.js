import React from 'react'
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import More from '../More/More'
import Footer from '../Footer/Footer'

function Movies() {
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

export default Movies;