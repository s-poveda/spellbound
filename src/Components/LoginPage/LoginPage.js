import React, { Component } from 'react';
import './loginpage.css';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
				<h2>Log in</h2>
				<form id="login-form">

					<input aria-label='Username' name='username' placeholder='Username' type='text'/>
					<input aria-label='Password' name='password' placeholder='Password'/>
					<button>Log in</button>
					
				</form>
			</div>
    );
  }
};
