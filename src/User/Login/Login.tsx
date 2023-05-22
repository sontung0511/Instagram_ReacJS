
import React, { useState  } from 'react';
import './Login.css';
import { NavLink,useNavigate  } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';



const Login =() =>  {
    // create a new history object
    
    const[email , setEmail] = useState('')
    const[password , setPassword] = useState('')
    
	const navigate = useNavigate()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/login', {
        email,
        password,
      });    
      navigate('/HomePage');
      console.log(response.data)
    } catch (error) {
        console.log(error)
    }
    };
    return (
        <div className="container">
        <div className="box">
            <div className="heading"></div>
            <form onSubmit={handleSubmit}  className="login-form" >
                <div className="field">
                    <input id="email" value={email} name="email"  onChange={e => setEmail(e.target.value)} type="email" placeholder="Phone number, username, or email" />
                    <label id = "email" >Phone number, username, or email</label>
                </div>
                <div className="field">
                    <input id="password" value={password} name="password" onChange={e => setPassword(e.target.value)} type="password" placeholder="password" />
                    <label id = "password">Password</label>
                </div>
                <button className="login-button" title="login">Log In</button>
                <div className="separator">
                    <div className="line"></div>
                    <p>OR</p>
                    <div className="line"></div>
                </div>
                <div className="other">
                    <button className="fb-login-btn" type="button">
                        <FontAwesomeIcon className="fa fa-facebook-official fb-icon" icon={faFacebook}/>
                        <span className="">Log in with Facebook</span>
                    </button>
                    <a className="forgot-password" href="#">Forgot password?</a>
                </div>
            </form>
        </div>
        <div className="box">
            <p>Don't have an account? <NavLink to={"/register"} className="signup">Sign Up</NavLink></p>
        </div>
        </div>
    );
} 

export default Login


