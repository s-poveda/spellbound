import React, { Component } from 'react';
import './signuppage.css';

export default class SignUpPage extends Component {
  render() {
    return (
			<>
				<h2>Sign Up</h2>

      	<form id='signup-form'>

					<input aria-label='User' name='username' type='text' placeholder='Username'/>
					<input aria-label='Password' name='password' placeholder='Password' type='password'/>
					<input aria-label='Confirm your Password' placeholder='Confirm Your Password' type='password'/>

					<button>Sign up</button>

				</form>
			</>
    );
  }
};
