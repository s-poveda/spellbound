export const API_URL = process.env.REACT_APP_API_BASE_URL;
export const TOKEN_KEY = process.env.REACT_APP_TOKEN_KEY;

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
