import React from 'react'
import BackEnd from './FrontEnd'
import FrontEnd from './BackEnd'
import './Skill.css'

export default function Skill() {
    return (
        <>
            <section className='skills section' id='skill'>
                <h2 className='section__title'>Skills</h2>
                <span className='section__subtitle'>My technical level</span>
                <div className="skills__container container grid">
                    <BackEnd />
                    <FrontEnd />
                </div>
            </section>
        </>
    )
}
