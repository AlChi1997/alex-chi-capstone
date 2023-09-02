import React from 'react'
import { Link } from 'react-router-dom';
import lock from '../../assets/lock-closed-outline.svg'
import user from '../../assets/person-circle-outline.svg'
import './Signup.scss'

const Signup = () => {
    return (
        <div className="signup">
            <div className='signup__box'>
                <div className="signup__formbox">
                    <div className="signup__value">
                    <form action="" className='signup__form'>
                        <h2 className='signup__title'>Sign Up</h2>
                        <div className="signup__inputbox">
                            <img src={user} style={{width:"20px", height:"20px"}}/>
                            <input type="text" required className='signup__input'/>
                            <label for="">Username</label>
                        </div>
                        <div className="signup__inputbox">
                            <img src={lock} style={{width:"20px", height:"20px"}}/>
                            <input type="password" required className='signup__input'/>
                            <label for="">Password</label>
                        </div>
                        <div className="signup__inputbox">
                            <img src={lock} style={{width:"20px", height:"20px"}}/>
                            <input type="password" required className='signup__input'/>
                            <label for="">Confirm Password</label>
                        </div>
                        <button className='signup__button'>Sign Up</button>
                        <div className="signup__register">
                            <Link to='/signup'>Have an account already? Log in</Link>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup