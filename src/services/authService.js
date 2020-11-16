import { fetchHandler, API_URL } from './config';
const apiAuthService = {
	login(username, password) {
		const body = JSON.stringify({ username, password });
		return fetchHandler(`${API_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body,
		});
	},

	signup(username, password) {
		const body = JSON.stringify({ username, password });
		return fetchHandler(`${API_URL}/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body,
		});
	},
};

export default apiAuthService;
