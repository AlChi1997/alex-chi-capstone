import React from 'react'
import { Link } from 'react-router-dom'
import lock from '../../assets/lock-closed-outline.svg'
import user from '../../assets/person-circle-outline.svg'
import './Login.scss'

const Login = () => {
    return (
        <div className='login'>
            <div className='login__box'>
                <div className="login__formbox">
                    <div className="login__value">
                    <form action="" className='login__form'>
                        <h2 className='login__title'>Login</h2>
                        <div className="login__inputbox">
                            <img src={user} style={{width:"20px", height:"20px"}}/>
                            <input type="text" required className='login__input'/>
                            <label for="">Username</label>
                        </div>
                        <div className="login__inputbox">
                            <img src={lock} style={{width:"20px", height:"20px"}}/>
                            <input type="password" required className='login__input'/>
                            <label for="">Password</label>
                        </div>
                        <div className="login__forget">
                            <label for="">
                                <div>
                                    <input type="checkbox"/>
                                    Remember Me 
                                </div>
                                <Link to='/'>Forget Password</Link>
                            </label>
                        </div>
                        <button className='login__button'>Log In</button>
                        <div className="login__register">
                            <Link to='/signup'>Don't have an account? Sign Up</Link>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login