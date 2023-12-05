import React from 'react'
import './AboutProject.css'

function AboutProject() {
    return (
        <section className="about-project" id='about-project'>
            <div className="section-title-container">
                <h3 className="section-title">О проекте</h3>
            </div>
            <div className="about-project__info-container">
                <div className="about-project__container">
                    <h3 className="about-project__info-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, 
                        добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className="about-project__container">
                    <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, 
                        которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className="about-project__calendar">
                <div className="about-project__calendar-back calendar-color-back">
                    <p className="about-project__calendar-back-text">1 неделя</p>
                </div>
                <div className="about-project__calendar-front calendar-color-front">
                    <p className="about-project__calendar-front-text">4 недели</p>
                </div>
            </div>
            <div className="about-project__calendar">
                <div className="about-project__calendar-back">
                    <p className="about-project__calendar-text-back">Back-end</p>
                </div>
                <div className="about-project__calendar-front">
                    <p className="about-project__calendar-text-front">Front-end</p>
                </div>
            </div>
        </section> 
    )
}

export default AboutProject;