import { API_URL, fetchHandler } from './config';

const usersService = {
	getSpellsByUsername(username, page = 1, spellsPerPage = 10) {
		spellsPerPage = Number(spellsPerPage);
		page = Number(page);
		if (!spellsPerPage || !page) {
			throw new Error('page and spellsPerPage must be numbers');
		}
		return fetchHandler(`${API_URL}/users/${username}?limit=${spellsPerPage}&offset=${spellsPerPage * (page - 1)}`);
	}
}

export default usersService;
