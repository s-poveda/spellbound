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
		.then(async res => {
			if (!res.ok){
				const reason = await res.json();
				return Promise.reject(reason);
			}
			const token = await res.json();
			return token;
		});
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
