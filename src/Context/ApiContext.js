import { createContext } from 'react';

export default createContext({
	spells: {
		// recentlyAdded: [],
		// popular: [],
		AllSpells: [],
		//requested spells are used when a user searches
		requested: [],
		//selected spells are used when a user clicks on a spell on screen
		selected: {},
	},
	submitSpell: () => {},
	deleteSpell: () => {},
	updateSpell: () => {},
	getUserProfile: () => {},
});
