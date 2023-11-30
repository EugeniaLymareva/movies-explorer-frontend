import headerLogo from '../../images/header-logo.svg'
import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div className="login">
            <img className="header__logo login__logo" src={headerLogo} alt="Логотип Diplom" />
            <h2 className="login__title title">Рады видеть!</h2>
            <form className="form">
                <label className="label">E-mail
                        <input type="email" name="email" className="input" required minLength="2" maxLength="30" />
                        <span className="error"></span>
                </label>

                <label className="label">Пароль
                    <input type="password" name="password" className="input" required minLength="2" maxLength="30" />
                    <span className="error"></span>
                </label>

                <button type="submit" className="submit-button login__button">Войти</button>
            </form>

            <div className="signin-signup">
                    <p>Ещё не зарегистрированы?</p>
                    <Link to="/signup" className="link">Регистрация</Link>
            </div>
        </div>
    )
}

export default Login;