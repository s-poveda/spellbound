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
};

export default tokenService;
