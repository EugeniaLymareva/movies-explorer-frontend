import React, { useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'


function SearchForm(props) {
    const [formValue, setFormValue] = useState({ search: '' })
    const [isError, setIsError] = useState('')
    const { pathname } = useLocation()
    const [search, setSearch] = useState('')

console.log('SearchForm render')

    React.useEffect(() => {
        if (pathname === '/movies') {
            const searchValue = localStorage.getItem(props.searchKey) || ''
            setSearch(searchValue)
            setFormValue({ search: searchValue })
        }
    }, [])

    const handleChange = useCallback((e) => {
        const { name, value } = e.target 

        setFormValue({                  
            ...formValue,
            [name]: value
        })

        if (pathname === '/movies') {
            localStorage.setItem(props.searchKey, value)
        }
        setSearch(value)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('formValue.search', formValue.search)
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
                <input type="text" name="search" value={search} onChange={handleChange} className="search__input" placeholder='Фильм' required />
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