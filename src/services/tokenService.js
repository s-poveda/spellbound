import { TOKEN_KEY } from './config';

const tokenService = {
	saveAuthToken(token) {
		window.localStorage.setItem(TOKEN_KEY, token);
	},
	getAuthToken() {
		return window.localStorage.getItem(TOKEN_KEY);
	},
	clearAuthToken() {
		window.localStorage.removeItem(TOKEN_KEY);
	},
	hasAuthToken() {
		return !!tokenService.getAuthToken();
	},
	//split the token on "." (periods), parses and returns the payload
	getPayload() {
		return JSON.parse(atob(tokenService.getAuthToken().split('.')[1]));
	}
};

export default tokenService;
