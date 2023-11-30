import headerLogo from '../../images/header-logo.svg' 
import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
    return (
        <div className="register">
            <img className="header__logo register__logo" src={headerLogo} alt="Логотип Diplom" />
            <h2 className="title register__title">Добро пожаловать!</h2>
            <form className="register__form form">
                <label className="label">Имя
                    <input type="text" name="name" className="input" required minLength="2" maxLength="30" />
                    <span className="error"></span>
                </label>

                <label className="label">E-mail
                    <input type="email" name="email" className="input" required minLength="2" maxLength="30" />
                    <span className="error"></span>
                </label>

                <label className="label">Пароль
                    <input type="password" name="password" className="input" required minLength="2" maxLength="30" />
                    <span className="error">Что-то пошло не так...</span>
                </label>

                <button type="submit" className="submit-button">Зарегистрироваться</button>
            </form>

            <div className="signin-signup">
                    <p>Уже зарегистрированы?</p>
                    <Link to="/signin" className="link">Войти</Link>
            </div>
        </div>
    )

}

export default Register;