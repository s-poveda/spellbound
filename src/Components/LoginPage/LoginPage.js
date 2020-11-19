import React, { Component } from 'react';
import authService from './../../services/authService';
import tokenService from './../../services/tokenService';
import './loginpage.css';

export default class LoginPage extends Component {
	state = {
		username: {
			touched: false,
			value: '',
		},
		password: {
			touched: false,
			value: '',
		},
		error: null,
	};

	usernameRef = React.createRef();
	passwordRef = React.createRef();

	onInputChange = ev => {
		const newState = Object.assign({}, this.state);
		newState[ev.target.name].value = ev.target.value;
		newState[ev.target.name].touched = true;
		this.setState(newState);
	};

	validInputs() {
		if (
		!this.state.username.value ||
		this.state.password.value.length < 8 ||
		this.state.password.value.length > 72
		) {

		}
	}

	onLoginSubmit= (ev) => {
		ev.preventDefault();
		const { username, password } = this.state;
		authService.login(username.value, password.value)
		.then( obj => {
			tokenService.saveAuthToken(obj.authToken);
			this.props.history.goBack();
		})
		.catch( error=> {
			this.setState({ error });
		});
	}

	render() {
		return (
			<div>
				<h2 className='login-title'>Log in</h2>
				<form id='login-form' onSubmit={this.onLoginSubmit}>
					<input
						autoComplete='username'
						aria-label='Type your username here'
						value={this.state.username.value}
						name='username'
						placeholder='Username'
						onChange={this.onInputChange}
						type='text'
					/>
					<input
						aria-label='type your password here'
						autoComplete='current-password'
						value={this.state.password.value}
						name='password'
						placeholder='Password'
						onChange={this.onInputChange}
						type='password'
					/>
					<button>Log in</button>
				</form>
			{!!this.state.error && 	<p>{this.state.error.message}</p>}
			</div>
		);
	}
}
