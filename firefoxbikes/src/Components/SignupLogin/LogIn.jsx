import './LogIn.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const LogIn=()=>{
     const [logindata, setLogindata] = useState({
          email: "",
          password: "",
     });
     const handdleChange = (e) => {
         
          const { id, value } = e.target;

          setLogindata({
            ...logindata,
            [id]: value,
          });
        };
     const hanndleSubmit = (e) => {
          e.preventDefault();
          axios.post("http://localhost:4500/login", logindata).then(() => {
          alert("user created succesfully");
          setLogindata({
               email: "",
               password: "",
               });
          });
     };
     return(
          <div className='LogIn'>
               <div className='LogIn-div'>
                    <form className='LogIn-form'>
                         <label >Email*</label><br />
                         <input  type="mail" placeholder='Enter Email Address' onChange={handdleChange} value={logindata.email} id="email"  required/><br />
                         <label >Password*</label><br />
                         <input  type="text" placeholder='Enter Password' onChange={handdleChange} value={logindata.password} id="password"  required  minlength="8"/><br />
                         <input id='LogIn_submit' type="submit" />
                    </form>
                    <div className='link_to_signup_div'>
                         <Link to={"/signuplogin/signup"} className="link_to_signup">
                              <p >New to Firefox? <span>CREATE AN ACCOUNT</span></p>
                         </Link>
                    </div>
               </div>
               <div>
                    
                    <div className='Login-social-item'>
                         
                         <p>Login Via</p>
                         <a href="https://www.firefoxbikes.com/on/demandware.store/Sites-HeroFirefox-Site/default/Login-OAuthLogin?oauthProvider=Google&amp;oauthLoginTargetEndPoint=1">
                              <div className='Login-icon-wrap'>
                                   <img src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20190923152039%21Google_%22G%22_Logo.svg"/>
                              </div>
                         </a>
                    </div>
               </div>
          </div>
     )
} 