import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
const Login = () => {
  return (
    <div className='login_card'>
    {/* <img src={require('../Images/Untitled design (4) (2).png')} alt="" /> */}
    <img src={require('../../Images/Untitled design (4) (2).png')} alt="" />

    <div className='login_content'>
     <div className='big_line'></div>
    <div className='login_content_header'> <span className='line'></span><h4>Login as a Admin User</h4></div>
     
     <form action="">
     <div className='input_email'>
     <input type="email" placeholder='nmeezan4@gmail.com' required/>
     <i class="fa-solid fa-user"></i>
     </div>
     <div className='input_password'>
     <input type="password" placeholder='x x x x x x' required />
     <i className="fa-solid fa-lock"></i>

     </div>
       <button type='submit' className='login-btn'>LOGIN</button>
     </form>
     <div className="forgot" style={{display:"flex",flexDirection:"column",gap:".5rem"}}>
     <p  className='forgot-pwd'><Link to='/forgot'>Forgot your password?</Link></p>
       <p  className="sign-pwd" ><Link to='/help'>Get Help Signed In</Link></p>
     </div>
     <p className='term'>Terms of use. Privacy Policy</p>
    </div>
    
   </div>
  )
}

export default Login