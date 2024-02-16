import React from 'react'
import Header from '../Header/Header'
import { Link, useNavigate } from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import { regexEmail } from '../../utils/constants'
import './Profile.css'

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext)
    const [name , setName] = React.useState(currentUser.name)
    const [email, setEmail ] = React.useState(currentUser.email)
    const [isValueChange, setIsValueChange] = React.useState(false)
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    const navigate = useNavigate()
    

    React.useEffect(() => {
        if (name !== currentUser.name || email !== currentUser.email) {
            setIsValueChange(true)
        } else {
            setIsValueChange(false)
        }
    }, [name, email, currentUser])

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateUser({
            name,
            email
        })
    }

    function handlNameChange(e) {
        const {name} = e.target
        const form = e.target.form 
        const validationMessage = e.target.validationMessage
        
        setIsValid(form.checkValidity());

        setErrors(prev => ({ ...prev, [name]: validationMessage }))
        setName(e.target.value)      
    }

    function handlEmailChange(e) {
        const {name} = e.target
        const form = e.target.form 
        const validationMessage = e.target.validationMessage
        
        setIsValid(form.checkValidity());

        setErrors(prev => ({ ...prev, [name]: validationMessage }))

        setEmail(e.target.value)    
    }
    

    function signOut(){
        // localStorage.removeItem('token');
        localStorage.clear()
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=nomoredomainsrocks.ru; secure; sameSite=None;"; // domain=nomoredomainsrocks.ru;
        props.loggedOut()
        navigate('/')
    }

    return (
        <>
            <Header isLoggedIn={true} />

            <section className="profile">
                <h2 className="profile__title title">Привет, {name}!</h2>
                <form className="form profile__form" onSubmit={handleSubmit} >
                    <label className="profile__label">
                        <p className="profile__input-text">Имя</p>
                        <input type="text" name="name" value={name} onChange={handlNameChange} className="profile__input profile__name" required minLength="2" maxLength="30" />
                    </label>
                    <span className="error">{errors.name}</span>
                    
                    <label className="profile__label">
                        <p className="profile__input-text">E-mail</p>
                        <input type="email" name="email" value={email} pattern={regexEmail} onChange={handlEmailChange} className="profile__input profile__email" required minLength="2" maxLength="30" />
                    </label>
                    <span className="error label-gap">{errors.email}</span>

                    <button type="submit" className={`profile__button ${isValueChange && isValid ? 'profile__button-disabled' : ''}`} disabled={isValueChange ? false : true}>Редактировать</button>   
                </form>
                <Link to="/" className="profile__link" onClick={signOut}>Выйти из аккаунта</Link>
            </section>

            <InfoTooltip
                isOpen={props.isOpen}
                onClose={props.onClose}
                isUpdateUser={props.isUpdateUser}
            />
        </>
    )
}

export default Profile;