import portfolioImg from '../../images/portfolio arrow .svg'
import React from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import './Portfolio.css'

function Portfolio() {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__container">
                    <Link className="portfolio__link" to="#">Статичный сайт
                        <img className="portfolio__img" src={portfolioImg} alt="Картинка стрелки" />
                    </Link>
                </li>
                <li className="portfolio__container">
                    <Link className="portfolio__link" to="#">Адаптивный сайт
                        <img className="portfolio__img" src={portfolioImg} alt="Картинка стрелки" />
                    </Link>
                </li>
                <li className="portfolio__container">
                    <Link className="portfolio__link" to="#">Одностраничное приложение
                        <img className="portfolio__img" src={portfolioImg} alt="Картинка стрелки" />
                    </Link>
                </li>
            </ul>
        </div>
    ) 
}

export default Portfolio;