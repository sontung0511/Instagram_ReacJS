import { useState } from "react";
import axios from "axios";
import "./Register.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
const Register = () => {
  const [userData, setUserData] = useState({
    phone: "",
    username: "",
    email: "",
    password: "",
    
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("users/create", userData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      <div className="box">
        <div className="heading"></div>
        <div className="separator">
          <div className="text-sign-up"></div>
          <span>Sign up to see photos and videos from your friends.</span>
          <div></div>
        </div>
        <button className="register-button" type="button">
          <FontAwesomeIcon
            className="fa fa-facebook-official fb-icon"
            icon={faFacebook}
          />
          <span className="">Log in with Facebook</span>
        </button>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="separator">
            <div className="line"></div>
            <p>OR</p>
            <div className="line"></div>
          </div>
          <div className="field">
            <input
              id="phone"
              onChange={handleChange}
              value={userData.phone}
              name="phone"
              type="text"
              placeholder="phone"
            />
            <label id="phone">phone</label>
          </div>
          <div className="field">
            <input
              id="username"
              onChange={handleChange}
              name="username"
              value={userData.username}
              type="text"
              placeholder="username"
            />
            <label id="username">Username</label>
          </div>
          <div className="field">
            <input
              id="email"
              onChange={handleChange}
              value={userData.email}
              name="email"
              type="email"
              placeholder="email"
            />
            <label id="username"> email</label>
          </div>
          <div className="field">
            <input
              id="password"
              onChange={handleChange}
              value={userData.password}
              name="password"
              type="password"
              placeholder="password"
            />
            <label id="password">Password</label>
          </div>
          <div className="help-register">
            <span className="">
              People who use our service may have uploaded your contact
              information to Instagram. Learn More
            </span>
          </div>
          <div className="help-register">
            <span className="">
              By signing up, you agree to our Terms , Privacy Policy and Cookies
              Policy .
            </span>
          </div>
          <div className="other">
            <button className="register-button" title="login">
              sign up
            </button>
          </div>
        </form>
      </div>
      <div className="box">
        <p>
          Have an account?{" "}
          <NavLink to="/" className="signup">
            Log in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
