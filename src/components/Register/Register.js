import headerLogo from '../../images/header-logo.svg' 
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as auth from '../../utils/Auth'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import { regexEmail } from '../../utils/constants'
import './Register.css'

function Register(props) {
    const [isRegister, setIsRegister] = React.useState(false)
    const [errors, setErrors] = useState({}); 
    const [isValid, setIsValid] = useState(false); 
    const [formValue, setFormValue] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        const form = e.target.form 
        const validationMessage = e.target.validationMessage 

        setFormValue({                  
            ...formValue,
            [name]: value
        })

        setIsValid(form.checkValidity());

        setErrors(prev => ({ ...prev, [name]: validationMessage }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()          
        
        auth.register(formValue.username, formValue.email, formValue.password)
        .then(() => {
            setIsRegister(true)
        })
        .catch((err) => {
            setIsRegister(false)
            setIsValid(false)
            console.log(err)
        })
        .finally(() => {
            props.setIsOpen(true)
        }) 
    }


    return (
        <>
            <section className="register">
                <Link to="/" className='register__link'>
                    <img className="header__logo register__logo" src={headerLogo} alt="Логотип Diplom" />
                </Link>            
                <h2 className="title register__title">Добро пожаловать!</h2>
                <form className="register__form form" onSubmit={handleSubmit} noValidate >
                    <label className="label">Имя
                        <input type="text" name="username" className="input" value={formValue.username} onChange={handleChange} required minLength="2" maxLength="30" />
                        <span className="error">{errors.username}</span>
                    </label>

                    <label className="label">E-mail
                        <input type="email" name="email" value={formValue.email} pattern={regexEmail} className="input" onChange={handleChange} required minLength="2" maxLength="30" />
                        <span className="error">{errors.email}</span>
                    </label>

                    <label className="label">Пароль
                        <input type="password" name="password" className="input input__password" value={formValue.password} onChange={handleChange} required minLength="8" maxLength="30" />
                        <span className="error">{errors.password}</span>
                    </label>

                    <button type="submit" className={`submit-button ${isValid ? '' : 'submit-button__disabled'} register__button`} disabled={isValid ? false : true}>Зарегистрироваться</button>
                </form>

                <div className="signin-signup">
                        <p>Уже зарегистрированы?</p>
                        <Link to="/signin" className="link">Войти</Link>
                </div>
            </section>

            <InfoTooltip
                isOpen={props.isOpen}
                onClose={props.onClose}
                onLoggedIn={props.onLoggedIn}
                formValue={formValue}
                isRegister={isRegister}
            />
        </>
    )

}

export default Register;