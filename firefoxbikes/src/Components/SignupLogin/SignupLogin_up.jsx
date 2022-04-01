import { useState } from 'react'
import './SignupLogin.css'
import {LogIn} from './LogIn'
import {SignUp} from './SignUp'

export const SignupLogin_up=()=>{
     const [flag, setFlag] = useState(true);
     return(
          <div className="SignupLogin">
               <div className="SignupLogin-div">
                    <SignUp/>
                    {/* {flag? <LogIn/> : <SignUp/>} */}
                    
               </div>
          </div>
     )
}