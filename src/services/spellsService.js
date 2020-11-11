import { API_URL, fetchHandler } from './config';
const spellsService = {

	getAllSpells(offset = 0) {
		return fetchHandler(`${API_URL}/spells?offset=${offset}`);
	},
	getSpellById(id) {
		return fetchHandler(`${API_URL}/spells/${id}`);
	},
	postSpell(spell, token) {
		const body = JSON.stringify({
			title: spell.title,
			description: spell.description,
		});
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
// eslint-disable-next-line
export default spellsService;
