import imgSuccess from '../../images/Union-success.svg'
import imgFail from '../../images/Union-fail.svg'
import {useLocation, useNavigate} from 'react-router-dom'
import './InfoTooltip.css'


function InfoTooltip(props) {
    const location = useLocation()
    const navigate = useNavigate()

    function handleClose() {
        props.onClose()
        if (props.isRegister) {
            navigate('/signin')
        }
    }

    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button className="popup__close" onClick={handleClose}  type="button"></button>
                {location.pathname === "/signup" &&<img className="popup__success-fail" src={props.isRegister ? imgSuccess : imgFail} alt='Картинка' />}
                {location.pathname === "/profile" &&<img className="popup__success-fail" src={props.onUpdateUser ? imgSuccess : imgFail} alt='Картинка' />}
                {location.pathname === "/signup" &&<h2 className="popup__message">{props.isRegister ? `Вы успешно зарегистрировались!` : `Что-то пошло не так!
                    Попробуйте ещё раз.`}
                </h2>}
                {location.pathname === "/profile" &&<h2 className="popup__message">{props.onUpdateUser ? `Данные профиля обнавлены` : `Что-то пошло не так!
                    Попробуйте ещё раз.`}
                </h2>}
            </div>
        </div>
    )
}

export default InfoTooltip 