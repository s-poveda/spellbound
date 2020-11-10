import { createContext } from 'react';

export default createContext({
	loggedIn: false,
	saveAuthToken: ()=>{},
	clearAuthToken: ()=>{},
	getAuthToken: ()=>{},
});
