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
		.then(async res => {
			try {
				if (!res.ok) {
					const data = await res.json();
					throw new ApiError(data.message);
				}
				if (res.status === 204) return {};
				return await res.json();
			} catch (e) {
				throw new ApiError(e.message);
			}
		});
}
