import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import lock from '../../assets/lock-closed-outline.svg'
import user from '../../assets/person-circle-outline.svg'
import './Login.scss'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        const userData ={
            username: username,
            password: password
        };

        try{
            const response = await axios.post('http://localhost:8080/login', userData);

            if(response && response.data){
                console.log(response.data);
                alert("User logged in successfully");
                navigate(`/user/${response.data.id}`);
            }
                else{
                    console.error("User not found");
                }
            }
            catch (error){
                console.log("An error occured: ", error);
            }
        };

    return (
        <div className='login'>
            <div className='login__box'>
                <div className="login__formbox">
                    <div className="login__value">
                    <form action="" className='login__form' onSubmit={handleSubmit}>
                        <h2 className='login__title'>Login</h2>
                        <div className="login__inputbox">
                            <img src={user} style={{width:"20px", height:"20px"}}/>
                            <input 
                                type="text" 
                                required 
                                className='login__input'
                                value={username}
                                onChange={handleUsernameChange}/>
                            <label className={username ? 'active' : ""} htmlFor="">Username</label>
                        </div>
                        <div className="login__inputbox">
                            <img src={lock} style={{width:"20px", height:"20px"}}/>
                            <input 
                                type="password" 
                                required 
                                className='login__input'
                                value={password}
                                onChange={handlePasswordChange}/>
                            <label className={password ? 'active' : ""} htmlFor="">Password</label>
                        </div>
                        <div className="login__forget">
                            <label htmlFor="">
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