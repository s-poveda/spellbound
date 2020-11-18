import React, { Component } from 'react';
import authService from '../../services/authService';
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
		error: null,
	};

	validatePassword = () => {
		if (!this.state.username.touched || !this.state.password.touched) throw new Error('A username and password is required.')
		if (!this.state.confirmPassword.touched) throw new Error('Please confirm your password');
		if (this.state.password.value.length < 8 || this.state.password.value.length > 72) throw new Error('Your password must be between 8 and 72 characters');
		if (this.state.password.value !== this.state.confirmPassword.value) throw new Error('Passwords must match');
		if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/.test(this.state.password.value))
			throw new Error('Your password must contain at least one of the following:\rUppercase\rlowercase\rNumber\rSpecial characters (!, &, *, etc.)')
	}

	onInputChange = ev => {
		const newState = Object.assign({}, this.state);
		newState[ev.target.name].value = ev.target.value;
		newState[ev.target.name].touched = true;
		this.setState({ newState });
	}

	onSubmit = async ev => {
		ev.preventDefault();
		try {
			// validation will throw if password is invalid
			this.validatePassword();
			await authService.signup(this.state.username.value, this.state.password.value);
			this.props.history.goBack();
		} catch (error) {
			this.setState({ error });
		}
	}

	render() {
		return (
			<>
				<h2 className='signup-title'>Sign Up</h2>

				<form id='signup-form' onSubmit={this.onSubmit}>
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
					{!!this.state.error &&
					<div id='error-message'>
						<p>{this.state.error.message}</p>
					</div>
					}

					<button>Sign up</button>
				</form>
			</>
		);
	}
}
