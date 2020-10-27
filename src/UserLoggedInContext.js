import { createContext } from 'react';

const userLoggedIn = createContext({
	loggedIn: false,
	userId : '',
});

export default userLoggedIn;
