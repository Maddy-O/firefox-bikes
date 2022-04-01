import { useState } from 'react'
import './SignupLogin.css'
import {LogIn} from './LogIn'
import {SignUp} from './SignUp'

export const SignupLogin=()=>{
     const [flag, setFlag] = useState(true);
     return(
          <div className="SignupLogin">
               <div className="SignupLogin-div">
                    <LogIn/>
                    {/* {flag? <LogIn/> : <SignUp/>} */}
                    
               </div>
          </div>
     )
}
