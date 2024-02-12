import React, { useState } from 'react'
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'


function SearchForm(props) {
    const [formValue, setFormValue] = useState({ search: ''})
    const [isError, setIsError] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target
        // const form = e.target.form 
        // const validationMessage = e.target.validationMessage  

        setFormValue({                  
            ...formValue,
            [name]: value
        })

        // setIsValid(form.checkValidity());

        // setErrors(prev => ({ ...prev, [name]: validationMessage }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formValue.search.trim()) { 
            setIsError('Нужно ввести ключевое слово') 
            return 
        }

        setIsError('')
        localStorage.setItem(props.searchKey, formValue.search)

        props.searchMovies(formValue.search, props.savedMovies)
    }

    return (
        <form className="search" onSubmit={handleSubmit} noValidate>
            <label className="search__label">
                <input type="text" name="search" onChange={handleChange} className="search__input" placeholder='Фильм' required />
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