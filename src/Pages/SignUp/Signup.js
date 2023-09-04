import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios'
import lock from '../../assets/lock-closed-outline.svg'
import user from '../../assets/person-circle-outline.svg'
import './Signup.scss'

const Signup = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (password !== confirmpassword) {
            alert("Passwords don't match");
            return;
        }

        const userData ={
            username: username,
            password: password
        };

        console.log(userData);

        try{
            const response = await axios.post('http://localhost:8080/signup', userData);
            console.log(response.data);
            alert("User created successfully");
            } catch (error){
                console.log(error.response.data);
            }
        };


    return (
        <div className="signup">
            <div className='signup__box'>
                <div className="signup__formbox">
                    <div className="signup__value">
                    <form action="" className='signup__form' onSubmit={handleSubmit}>
                        <h2 className='signup__title'>Sign Up</h2>
                        <div className="signup__inputbox">
                            <img src={user} style={{width:"20px", height:"20px"}}/>
                            <input 
                                type="text" 
                                required 
                                className='signup__input'
                                value={username}
                                onChange={handleUsernameChange}/>
                            <label className={username ? 'active' : ""} htmlFor="">Username</label>
                        </div>
                        <div className="signup__inputbox">
                            <img src={lock} style={{width:"20px", height:"20px"}}/>
                            <input 
                                type="password" 
                                required 
                                className='signup__input'
                                value={password}
                                onChange={handlePasswordChange}/>
                            <label className={password ? 'active' : ""} htmlFor="">Password</label>
                        </div>
                        <div className="signup__inputbox">
                            <img src={lock} style={{width:"20px", height:"20px"}}/>
                            <input 
                                type="password" 
                                required 
                                className='signup__input'
                                value={confirmpassword}
                                onChange={handleConfirmPasswordChange}/>
                            <label className={confirmpassword ? 'active' :""} htmlFor="">Confirm Password</label>
                        </div>
                        <button className='signup__button'>Sign Up</button>
                        <div className="signup__register">
                            <Link to='/login'>Have an account already? Log in</Link>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup