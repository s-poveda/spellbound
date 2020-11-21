import { API_URL, fetchHandler } from './config';
import tokenService from './tokenService';

const spellsService = {

	getAllSpells(offset = 0) {
		return fetchHandler(`${API_URL}/spells?offset=${offset}`);
	},
	getSpellById(id) {
		return fetchHandler(`${API_URL}/spells/${id}`);
	},
	postSpell(spell) {
		const body = JSON.stringify(spell);
		const token = tokenService.getAuthToken();
		return fetchHandler(`${API_URL}/spells`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body,
		});
	}
}

export default spellsService;
