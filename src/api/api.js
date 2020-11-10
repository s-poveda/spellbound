import { API_URL } from './config';

class ApiError extends Error {
	constructor(message, code) {
		super(message);
		this.fromApi = true;
	}
}

function fetchHandler(...args) {
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

function getAllSpells(offset = 0) {
	return fetchHandler(`${API_URL}/spells?offset=${offset}`);
}

function getSpellById(id) {
	return fetchHandler(`${API_URL}/spells/${id}`);
}

export default {
	getAllSpells,
	getSpellById
}
