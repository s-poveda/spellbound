export const API_URL = 'http://localhost:8000/api';
export const TOKEN_KEY = 'spellbound-api-token';

class ApiError extends Error {
	constructor(message, code) {
		super(message);
		this.fromApi = true;
	}
}

export function fetchHandler(...args) {
	return fetch(...args)
		.then(res => {
			if (!res.ok) {
				throw new ApiError(res.message);
			}
			if (res.status === 204) return {};
			return res.json();
		})
		.then(data => {
			return data;
		})
		.catch(e => {
			throw new ApiError(e.message);
		});
}
