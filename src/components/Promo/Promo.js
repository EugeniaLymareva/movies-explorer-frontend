import promoImg from '../../images/Earth-web.svg'
import React from 'react'
import './Promo.css'

function Promo() {
    return (
        <section className="promo">
            <img className="promo__img" src={promoImg} alt="Логотип Earth" />
            <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
            <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </section>
    )
}
 
export default Promo;