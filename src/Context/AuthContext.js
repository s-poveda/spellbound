import { createContext } from 'react';

export default createContext({
	loggedIn: ()=>{},
	saveAuthToken: ()=>{},
	logOut: ()=>{},
	getAuthToken: ()=>{},
});
