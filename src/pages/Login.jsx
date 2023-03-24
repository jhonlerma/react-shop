import React from 'react';
import { useRef } from 'react';
import '@styles/Login.scss';
import LogoYardSale from '@logos/logo_yard_sale.svg'

const Login = () => {

  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current)
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data);
  }

  return (
    <div className="login">
      <div className="form-container">
        <img src={LogoYardSale} alt="logo" className="logo" />

        <form className="form" ref={form}>
          <label htmlFor="email" className="label">Email address</label>
          <input type="text" name="email" placeholder="example@mail.com" className="input input-email" />

          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" placeholder="********" className="input input-password" />

          <button value="Log in" className="primary-button login-button" onClick={handleSubmit} />
          <a href="/">Forgot my password</a>
        </form>

        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>

  );
}

export default Login;