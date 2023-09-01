import React from 'react'
import rocket from '../../assets/rocket.jpg'
import './About.scss'

const About = () => {

    return (
        <div className='about'>
            <div className='about__banner'>
                <div className='about__filter'></div>
                <h1 className='about__title'>About Us</h1>
                <img className='about__banner__img' src={rocket} alt='rocket'/>
            </div>
            <div className='about__content'>
                <section className='about__block'>
                    <div className='about__textbox'>
                        <h2>Who are we?</h2>
                        <p className='about__text'>
                        We are a dedicated group of developers driven by a common goal: to tackle a pressing issue facing 
                        young adults in their early education and career choices. Committed to leveraging our technical 
                        expertise, creativity, and passion for education, we founded Launchpad with the aim of empowering 
                        students and educators alike.
                        </p>
                    </div>
                    <div className='about__container'>
                        <img className='about__img' src={rocket} alt='rocket'/>
                    </div>
                </section>
                <section className='about__block'>
                    <div className='about__container'>
                        <img className='about__img' src={rocket} alt='rocket'/>
                    </div>
                    <div className='about__textbox'>
                        <h2>Problem Space</h2>
                        <p className='about__text'>
                            A growing number of early adults and students are navigating the daunting maze of career choices with 
                            uncertainty. This is evident in the rising trends of career switches, college dropouts, and 
                            program changes. 
                        </p>
                    </div>
                </section>
                <section className='about__block'>
                    <p className='about__text'></p>
                </section>
            </div>
        </div>
        )
    }

export default About