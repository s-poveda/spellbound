import { API_URL } from './config';

const apiAuthService = {
	login(username, password) {
		const body = JSON.stringify({ username, password });
		return fetch(`${API_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body,
		})
		.then(res => res.json)
		.then(token=>token);
	},

	signup(username, password) {
		const body = JSON.stringify({ username, password });
		return fetch(`${API_URL}/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body,
		})
	},
};

export default apiAuthService;
