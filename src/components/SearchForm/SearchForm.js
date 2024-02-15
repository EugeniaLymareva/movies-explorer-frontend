import React, { useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'


function SearchForm(props) {
    const [formValue, setFormValue] = useState({ search: '' })
    const [isError, setIsError] = useState('')
    const { pathname } = useLocation()
console.log('SearchForm render')

    const handleChange = useCallback((e) => {
        const { name, value } = e.target 

        setFormValue({                  
            ...formValue,
            [name]: value
        })

        if (pathname === '/movies') {
            localStorage.setItem(props.searchKey, value)
            // console.log('formValue.search', formValue.search)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formValue.search.trim()) { 
            setIsError('Нужно ввести ключевое слово') 
            return 
        }

        setIsError('')

        props.searchMovies(formValue.search, props.savedMovies)
    }

    return (
        <form className="search" onSubmit={handleSubmit} noValidate>
            <label className="search__label">
                <input type="text" name="search" value={pathname === '/movies' ? localStorage.getItem(props.searchKey) || '' : ''} onChange={handleChange} className="search__input" placeholder='Фильм' required />
                <button className="search__button" type="submit"></button>
            </label>
            <div className='search__error-container'>
                <span className="search__error">{isError}</span>
             </div>
            <FilterCheckbox isCheck={props.isCheck} setIsCheck={props.setIsCheck} />
        </form>
    )
}

export default SearchForm;