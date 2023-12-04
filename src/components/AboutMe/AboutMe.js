import myFoto from '../../images/MyFoto.jpg'
import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio from '../Portfolio/Portfolio'
import './AboutMe.css'

function AboutMe() {
    return (
        <section className="about-me">
            <div className="section-title-container">
                <h3 className="section-title">Студентка</h3>
            </div>
            
            <div className="about-me__container">
            <img className="about-me__foto" src={myFoto} alt="Фото студента" />
                <h2 className="about-me__title">Евгения</h2>
                <h3 className="about-me__course">Фронтенд-разработчик, 35 лет</h3>
                <p className="about-me__info">
                    Я живу в городе Томск, закончила факультет промышленного и гражданского 
                    строительства ТГАСУ. У меня есть муж, сын и пес. Я люблю заниматься творчеством,
                    делать что-то своими руками. 12 лет я занималась преподаванием в университете, 
                    теперь решила попробовать что-то новое.
                </p>
                <Link className="about-me__link" to="https://github.com/EugeniaLymareva">Github</Link>
                
                <Portfolio />
            </div> 
        </section>
    )
}

export default AboutMe;