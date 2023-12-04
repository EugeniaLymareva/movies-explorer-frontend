import React from 'react'
import './SearchForm.css'
import searchButton from '../../images/find.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'


function SearchForm() {
    return (
        <form className="search">
            <label className="search__label">
                <input type="text" name="search" className="search__input" placeholder='Фильм' />
                <button className="search__button" type="button"></button>
            </label>
            <FilterCheckbox />
        </form>
    )
}

export default SearchForm;