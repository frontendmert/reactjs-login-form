import React from 'react';

import heroİmg from '../assets/img/hero-login.png'

import '../scss/App.css';

export const Form = () => {
  return (
    <div className="body">
      <div className="collign-col-1">
        {/* HERO */}
        <div className="login-hero">
          <img src={heroİmg} className="heroImg" />
        </div>

        {/* LOGİN */}

        <div className="login-box">
          
          <div className="heading-text">
            <h1 className="h-t-css">Sign in</h1>
            <label className="arf">Hesabınıza erişmek için  giriş yapmanız gerekiyor. <br /> Lütfen giriş yapınız.</label>
          </div>

          <div className="inputBox-div">
          <input type="text" placeholder='Username' className='inputBox ar' />
          <input type="password" placeholder='Password' className='inputBox cr' />
          </div>




          <div className="check-div-full">


          <div className="check-div">

    <label className="checkbox">
    <input type="checkbox" />
       <svg viewBox="0 0 21 18">
    <symbol id="tick-path" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg">
       <path d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69" fill="none" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
        </symbol>
      <defs>
         <mask id="tick">
           <use class="tick mask" href="#tick-path" />
          </mask>
         </defs>
      <use class="tick" href="#tick-path" stroke="currentColor" />
      <path fill="white" mask="url(#tick)" d="M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z" />
       </svg>
       <svg className="lines" viewBox="0 0 11 11">
      <path d="M5.88086 5.89441L9.53504 4.26746" />
     <path d="M5.5274 8.78838L9.45391 9.55161" />
       <path d="M3.49371 4.22065L5.55387 0.79198" />
      </svg>
      </label> <span className="arrt">Remember me</span>
      </div>

      <button className='loginButton'>Sign in</button> <br />

      <span>Hesabınız yok mu ? <a href="#" className='signUp'>Kayıt olun!</a></span>
         </div>



        </div>


        </div>
          </div>
  )
}

{/* FROM MERT ÖZBEK :) */}

export default Form;
