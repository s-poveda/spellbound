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

	onInputChange = ev => {
		const newState = Object.assign({}, this.state);
		newState[ev.target.name].value = ev.target.value;
		newState[ev.target.name].touched = true;
		this.setState(newState);
	};

	onLoginSubmit= (ev) => {
		ev.preventDefault();
		const { username, password } = this.state;
		authService.login(username.value, password.value)
		.then( obj => {
			console.log(obj);
			tokenService.saveAuthToken(obj.authToken);
			this.props.history.goBack();
		})
		.catch( error=> {
			console.log(error);
			this.setState({ error });
		});
	}

	render() {
		return (
			<div>
				<h2>Log in</h2>
				<form id='login-form' onSubmit={this.onLoginSubmit}>
					<input
						aria-label='Username'
						value={this.state.username.value}
						name='username'
						placeholder='Username'
						onChange={this.onInputChange}
						type='text'
					/>
					<input
						aria-label='Password'
						value={this.state.password.value}
						name='password'
						placeholder='Password'
						onChange={this.onInputChange}
						type='password'
					/>
					<button>Log in</button>
				</form>
			</div>
		);
	}
}
