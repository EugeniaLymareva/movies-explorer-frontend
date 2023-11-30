import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

 function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            </div>
            <div className="footer__nav">
                <p className="footer__copyright">© 2020</p>
                <div className="footer__link-container">
                    <Link className="footer__link" to="https://practicum.yandex.ru/">Яндекс.Практикум</Link>
                    <Link className="footer__link" to="https://github.com/">Github</Link>
                </div>
            </div>
        </div>
    )
 }

 export default Footer;