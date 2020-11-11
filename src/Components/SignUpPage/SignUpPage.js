import React, { Component } from 'react';
import './signuppage.css';

export default class SignUpPage extends Component {
	state = {
		username: {
			touched: false,
			value: '',
		},
		password: {
			touched: false,
			value: '',
		},
		confirmPassword: {
			touched: false,
			value: '',
		},
	};

	onInputChange = ev => {
		const newState = Object.assign({}, this.state);
		newState[ev.target.name].value = ev.target.value;
		this.setState({ newState });
	};

	render() {
		return (
			<>
				<h2>Sign Up</h2>

				<form id='signup-form'>
					<input
						onChange={this.onInputChange}
						value={this.state.username.value}
						aria-label='User'
						autoComplete='username'
						name='username'
						type='text'
						placeholder='Username'
					/>
					<input
						onChange={this.onInputChange}
						value={this.state.password.value}
						name='password'
						aria-label='Password'
						autoComplete='new-password'
						placeholder='Password'
						type='password'
					/>
					<input
						onChange={this.onInputChange}
						value={this.state.confirmPassword.value}
						name='confirmPassword'
						aria-label='Confirm your Password'
						autoComplete='new-password'
						placeholder='Confirm Your Password'
						type='password'
					/>

					<button>Sign up</button>
				</form>
			</>
		);
	}
}
