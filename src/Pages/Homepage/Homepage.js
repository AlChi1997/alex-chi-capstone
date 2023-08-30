import React from 'react'
import './Homepage.scss'
import banner from '../../assets/Slogan-Web-Banner_norm.jpg'

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='homepage__banner'>
                <div className='homepage__transparent'></div>
                <img className='homepage__img' src={banner} alt='banner' />
            </div>
        </div>
    )
}

export default Homepage