import { API_URL, fetchHandler } from './config';
import tokenService from './tokenService';


function	getUserProfile(username, page = 1, spellsPerPage = 10) {
		spellsPerPage = Number(spellsPerPage);
		page = Number(page);
		if (!spellsPerPage || !page) {
			throw new Error('page and spellsPerPage must be numbers');
		}
		return fetchHandler(`${API_URL}/users/${username}?limit=${spellsPerPage}&offset=${spellsPerPage * (page - 1)}`);
	}

function	getOwnProfile() {
		//split the token on "." (periods). parse the payload, and take the subject key as username
		const username = JSON.parse(atob(tokenService.getAuthToken().split('.')[1])).sub;
		return getUserProfile(username);
	}


export default {
	getUserProfile,
	getOwnProfile,
};
