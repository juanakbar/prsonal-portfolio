import React, { useState } from 'react'
import './Qualification.css'
export default function Qualification() {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <>
            <section className='qualification section'>
                <h2 className="section__title">Qualification</h2>
                <span className="section__subtitle">
                    My Personal Journey
                </span>
                <div className="qualifation__container container">
                    <div className="qualification__tabs">
                        <div className={toggleState === 1 ? 'qualification__button button--flex qualification__active' : 'qualification__button button--flex'} data-target='#education'
                            onClick={() => toggleTab(1)}>
                            <i className="uil uil-graduation-cap qualification__icon"></i>
                            Education
                        </div>
                        <div className={toggleState === 2 ? 'qualification__button button--flex qualification__active' : 'qualification__button button--flex'} data-target='#education'
                            onClick={() => toggleTab(2)}
                        >
                            <i className="uil uil-briefcase-alt qualification__icon"></i>
                            Experience
                        </div>
                    </div>

                    <div className="qualification__section">
                        <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'} data-content id='education'>
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Bachelor of Computer Science</h3>
                                    <span className="qualification__subtitle">University of California</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt qualification__icon"></i>
                                        2017 - 2021
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Bachelor of Computer Science</h3>
                                    <span className="qualification__subtitle">University of California</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt qualification__icon"></i>
                                        2017 - 2021
                                    </div>
                                </div>
                            </div>
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Bachelor of Computer Science</h3>
                                    <span className="qualification__subtitle">University of California</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt qualification__icon"></i>
                                        2017 - 2021
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Bachelor of Computer Science</h3>
                                    <span className="qualification__subtitle">University of California</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt qualification__icon"></i>
                                        2017 - 2021
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'} data-content id='experience'>
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Bachelor of Computer Science</h3>
                                    <span className="qualification__subtitle">Juan AKbar INdrian</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt qualification__icon"></i>
                                        2017 - 2021
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Bachelor of Computer Science</h3>
                                    <span className="qualification__subtitle">University of California</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt qualification__icon"></i>
                                        2017 - 2021
                                    </div>
                                </div>
                            </div>
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Bachelor of Computer Science</h3>
                                    <span className="qualification__subtitle">University of California</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt qualification__icon"></i>
                                        2017 - 2021
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Bachelor of Computer Science</h3>
                                    <span className="qualification__subtitle">University of California</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt qualification__icon"></i>
                                        2017 - 2021
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
