import React from 'react'
import Navbar from '../Componets/Navbar/Navbar'
import '../Componets/Styles/SignUp.css'
import Mobilenav from '../Componets/Navbar/Mobilenav'
const SignUp = () => {
  return (
    <>
    <Navbar/>
    <Mobilenav/>
    <section className='SignUp-page'>
         <div className="SignUp">
           <form>
               <h1>SIGN UP👋 </h1>
              <input className="enter"type='name' placeholder='Enter Full name' required/>
              <input className="enter"type='name' placeholder='Enter Username' required/>
              <input className="enter"type="email" placeholder='Enter Email' required />
              <input className="enter"type="password" placeholder='password' required />
              <input className="enter"type="password" placeholder='confirm password' required />
              <input type="checkbox" className='check'/>
                   <p>Remember me</p>
                <button className='Sign-Up'>SIGN UP</button>
                <a className="LOG"href="/Login">Already  have an Account? Login Now!</a>
           </form>
        </div>
    </section>
   
    </>
  )
}

export default SignUp