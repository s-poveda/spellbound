import { createContext } from 'react';

export default createContext({
	spells: {
		recentlyAdded : [],
		popular: [],
		requested: [],
		selected: {}
	},
	submitSpell: () => {},
	deleteSpell: ()=>{},
	updateSpell: () => {},

});
