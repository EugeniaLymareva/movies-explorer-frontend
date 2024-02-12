import portfolioImg from '../../images/portfolio arrow .svg'
import React from 'react'
import './Portfolio.css'

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__container">
                    <a className="portfolio__link" href={"https://practicum.studentlea.nomoredomainsicu.ru"} target={'blank'}>Статичный сайт
                        <img className="portfolio__img" src={portfolioImg} alt="Картинка стрелки" />
                    </a>
                </li>
                <li className="portfolio__container">
                    <a className="portfolio__link" href={"https://eugenialymareva.github.io/russian-travel/"} target={'blank'}>Адаптивный сайт
                        <img className="portfolio__img" src={portfolioImg} alt="Картинка стрелки" />
                    </a>
                </li>
                <li className="portfolio__container">
                    <a className="portfolio__link" href="#" target={'blank'}>Одностраничное приложение
                        <img className="portfolio__img" src={portfolioImg} alt="Картинка стрелки" />
                    </a>
                </li>
            </ul>
        </section>
    ) 
}

export default Portfolio;