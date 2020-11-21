import { createContext } from 'react';

export default createContext({
	spells: {
		AllSpells: [],
	},
	submitSpell: () => {},
	deleteSpell: () => {},
	updateSpell: () => {},
	getSpell: () => {},
	getUserProfile: () => {},
});
