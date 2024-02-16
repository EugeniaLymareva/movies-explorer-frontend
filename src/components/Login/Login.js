import headerLogo from '../../images/header-logo.svg'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as auth from '../../utils/Auth'
import { regexEmail } from '../../utils/constants'
import './Login.css'

function Login(props) {
    const [errors, setErrors] = useState({}); 
    const [isValid, setIsValid] = useState(false);
    const [serverErrorMessage, setServerErrorMessage] = useState('')
    const [formValue, setFormValue] = useState({
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
        if (!formValue.email || !formValue.password) {  
            return
        }
        auth.login(formValue.email, formValue.password) 
        .then((data) => {
            localStorage.setItem('token', data.token)
            props.onLoggedIn({ name: data.name , email: data.email })
        })
        .catch((err) => {
            setServerErrorMessage(`Что-то пошло не так! ` + err)
            setIsValid(false)
            console.log(err)
        })
    }

    return (
        <section className="login">
            <Link to="/" className='login__link'>
                <img className="header__logo login__logo" src={headerLogo} alt="Логотип Diplom" />
            </Link>
            
            <h2 className="login__title title">Рады видеть!</h2>
            <form className="form" onSubmit={handleSubmit} noValidate >
                <label className="label">E-mail
                        <input type="email" name="email" className="input" pattern={regexEmail} onChange={handleChange} required minLength="2" maxLength="30" />
                        <span className="error">{errors.email}</span>
                </label>

                <label className="label">Пароль
                    <input type="password" name="password" className="input" onChange={handleChange} required minLength="8" maxLength="30" />
                    <span className="error">{errors.password}</span>
                    <span className="error">{serverErrorMessage}</span>
                </label>

                <button type="submit" className={`submit-button ${isValid ? '' : 'submit-button__disabled'} login__button`} disabled={isValid ? false : true}>Войти</button>
            </form>

            <div className="signin-signup">
                    <p>Ещё не зарегистрированы?</p>
                    <Link to="/signup" className="link">Регистрация</Link>
            </div>
        </section>
    )
}

export default Login;