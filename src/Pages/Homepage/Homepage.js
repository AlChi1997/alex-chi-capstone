import React from 'react'
import './Homepage.scss'
import banner from '../../assets/Slogan-Web-Banner_norm.jpg'
import classroom from '../../assets/classroom.jpg'
import career from '../../assets/career.webp'
import satisfaction from '../../assets/satisfaction.jpg'

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='homepage__banner'>
                <div className='homepage__transparent'></div>
                <img className='homepage__img' src={banner} alt='banner' />
            </div>
            <div className='homepage__content'>
                <section className='homepage__block'>
                    <p className='homepage__text'>
                        Launchpad is your essential companion on the journey to discovering 
                        the perfect career path. Designed with young adults in mind, our innovative 
                        web application is dedicated to helping students and educators bridge the gap 
                        between interests and educational strengths, ultimately guiding them towards 
                        fulfilling and rewarding career choices. 
                        </p>
                    <div className='homepage__container'>
                        <img className='homepage__img' src={classroom} alt='classroom' />
                    </div>
                </section>
                <section className='homepage__block'>
                    <div className='homepage__container'>
                        <img className='homepage__img' src={career} alt='career selection' />
                    </div>
                    <p className='homepage__text'>
                        With Launchpad, young adults can explore a diverse array of career possibilities, 
                        uncovering hidden talents and passions they may not have known they possessed. 
                        Our platform provides valuable insights, offering personalized recommendations 
                        based on individual interests and academic aptitude, thus empowering users to 
                        make informed decisions about their educational and professional futures. 
                    </p>
                </section>
                <section className='homepage__block'>
                    <p className='homepage__text'>
                        Furthermore, at Launchpad, we understand that job satisfaction and career success are 
                        integral to a fulfilling life. That's why our platform not only helps you identify potential 
                        career paths but also offers valuable resources and insights to help you excel in your chosen 
                        field. </p>
                    <div className='homepage__container'>
                        <img className='homepage__img' src={satisfaction} alt='classroom' />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Homepage