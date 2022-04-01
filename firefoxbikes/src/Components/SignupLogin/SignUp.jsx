import { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const SignUp=()=>{
     const [signupdata, setSignupdata] = useState({
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          password: "",
     });
     const handdleChange = (e) => {
         
          const { id, value } = e.target;

          setSignupdata({
            ...signupdata,
            [id]: value,
          });
        };
     const hanndleSubmit = (e) => {
          e.preventDefault();
          // console.log(signupdata);
          axios.post("http://localhost:4500/register", signupdata).then((res) => {
          console.log(res)
          alert("user created succesfully");
          setSignupdata({
               first_name: "",
               last_name: "",
               phone: "",
               email: "",
               password: "",
               });
          });
     };
   
     return(
          <div className='SignUp'>
               <div className='SignUp-div'>
                    <form className='SignUp-form' onSubmit={hanndleSubmit}>
                         <label >First Name*</label><br />
                         <input  type="text" placeholder='Enter your First Name' onChange={handdleChange} value={signupdata.first_name} id="first_name" required minLength={4} maxLength={8}/><br />
                         <label >Last Name*</label><br />
                         <input  type="text" placeholder='Enter your Last Name' onChange={handdleChange} value={signupdata.last_name} id="last_name" required /><br />
                         <label >Mobile*</label><br />
                         <input  type="text" placeholder='Enter Phone Number' onChange={handdleChange} value={signupdata.phone} id="phone" required minLength="10" maxLength="10" /><br />
                         <label >Email*</label><br />
                         <input  type="mail" placeholder='Enter Email Address' onChange={handdleChange} value={signupdata.email} id="email"  required/><br />
                         <label >Password*</label><br />
                         <input  type="text" placeholder='Enter Password' onChange={handdleChange} value={signupdata.password} id="password"  required minLength="8" /><br />
                         <label >Confirm Password*</label><br />
                         <input  type="text" placeholder='Re-enter Password'  id="" required minLength="8" /><br />
                         <input id='SignUp_checkbox' type="checkbox" required/>
                         <label id='accpt_term_and_condition'>I have read and accept the <span id='tetm_and_condition'>Terms & conditions</span></label><br />
                         <input id='SignUp_submit' type="submit" />
                    </form>
                    <div className='link_to_signup_div'>
                         <Link to={"/signuplogin/login"} className="link_to_signup">
                              <p >Already have an Account? <span>LOGIN</span></p>
                         </Link>
                    </div>
               </div>
          </div>
     )
} 