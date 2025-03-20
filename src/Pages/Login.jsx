import React from 'react'
import Navbar from '../Componets/Navbar/Navbar'
import '../Componets/Styles/Login.css'
import MobileNav from '../Componets/Navbar/Mobilenav'

const Login = () => {
  return (
    <>
    <Navbar/>
    <MobileNav/>
    <section className='Login-page'>
         <div className="login">
           <form>
               <h1>LOGIN </h1>
              <input className="enter" type='name' placeholder='Enter Username' required/>
              <input className="enter" type="email" placeholder='Enter Email' required />
              <input className="enter" type="password" placeholder='password' required />
              <input type="checkbox" className='Check'/>
                   <p>Keep me Logged in</p>
                <button className='Login2'>LOGIN</button>
                <a className="Signup"href="/SignUp">Don't have an Account? Sign Up Now!</a>
           </form>
        </div>
    </section>
   
    </>
  )
}

export default Login