import React from 'react'
import './SearchForm.css'
import searchButton from '../../images/find.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'


function SearchForm() {
    return (
        <div className="search">
            <label className="search__label">
                <input type="text" name="search" className="search__input" placeholder='Фильм' />
                <img className="search__img" src={searchButton} alt="Кнопка поиска" />
            </label>
            <FilterCheckbox />
        </div>
    )
}

export default SearchForm;