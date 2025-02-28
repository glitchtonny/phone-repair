import React from 'react';
import './RegisterPage.css';

function RegisterPage() {
  return (
    <div className="register">
      <h1>Register</h1>
      <form>
        <div>
          <label>Username: </label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
