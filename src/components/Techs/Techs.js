import React from 'react'
import './Techs.css'

function Techs() {
    return (
        <section className="techs">
            <div className="techs__title-container">
                <h3 className="section-title">Технологии</h3>
            </div>
            <h2 className="techs__title">7 технологий</h2>
            <p className="techs__info">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__grid">
                <li className="techs__card">HTML</li>
                <li className="techs__card">CSS</li>
                <li className="techs__card">JS</li>
                <li className="techs__card">React</li>
                <li className="techs__card">Git</li>
                <li className="techs__card">Express.js</li>
                <li className="techs__card">mongoDB</li>
            </ul>
        </section>
    )
}

export default Techs;