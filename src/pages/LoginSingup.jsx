import React from "react";
import "./style/LoginSingup.css";
function LoginSingup() {
  return (
    <div className="conatiner">
      <div className="LoginSingup">
        <div className="loginSingup-conteainer">
          <h1>Sign up</h1>
          <div className="login-singup-fields">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Adress" />
            <input type="password" placeholder="password" />
          </div>
          <button>Continue</button>
          <p className="Loginsingup-login">
            already have account <span>Login here</span>
          </p>

          <div className="loginSingup-agree">
            <input type="checkbox" name="" id="" />
            <p>by continuing, i agree to the terms of use $ privacy policy </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSingup;
