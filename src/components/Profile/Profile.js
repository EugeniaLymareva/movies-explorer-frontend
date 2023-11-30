import React from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import './Profile.css'

function Profile() {
    return (
        <>
            <Header />

            <div className="profile">
                <h2 className="profile__title title">Привет, Евгения!</h2>
                <form className="form profile__form">
                    <label className="profile__label">
                        <p className="profile__input-text">Имя</p>
                        <input type="text" name="name" className="profile__input" required minLength="2" maxLength="30" />
                    </label>
                    
                    <label className="profile__label label-gap">
                        <p className="profile__input-text">E-mail</p>
                        <input type="email" name="email" className="profile__input profile__email" required minLength="2" maxLength="30" />
                    </label>
                    {/* <span className="error"></span> */}

                    <button type="submit" className="submit-button profile__submit-button" >Сохранить</button>
                </form>
                <button type="button" className="profile__button" >Редактировать</button>
                <Link to="/" className="profile__link">Выйти из аккаунта</Link>
            </div>
        </>
    )
}

export default Profile;