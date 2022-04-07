
import './SignupLogin.css'
import {SignUp} from './SignUp'

export const SignupLogin_up=()=>{
     return(
          <div className="SignupLogin">
               <div className='SignupLogin-left-div'>
                    <div className='SignupLogin-hello-div'>
                         <h1 className='SignupLogin-hello'>HELLO </h1>
                         <h1 className='SignupLogin-there'>THERE!!</h1>
                         <p>Login using your Username and Password.</p>
                    </div>
               </div>
               <div className="SignupLogin-div">
                    <SignUp/>
                    {/* {flag? <LogIn/> : <SignUp/>} */}
                    
               </div>
          </div>
     )
}