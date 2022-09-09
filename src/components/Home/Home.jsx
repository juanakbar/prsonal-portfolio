import React from 'react'
import Scroll from './Scroll'
import Social from './Social'
import Blobs from './Blobs'
import "./Home.css"
import Me from './Me'

export default function Home() {
    return (
        <>
            <section className='home section' id='home'>
                <div className='home__container container grid'>
                    <div className='home__content grid'>
                        <Social />
                        <Blobs />
                        <Me />
                    </div>
                    <Scroll />
                </div>
            </section>
        </>
    )
}
