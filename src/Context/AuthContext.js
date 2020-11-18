import { createContext } from 'react';

export default createContext({
	loggedIn: ()=>{},
	saveAuthToken: ()=>{},
	logOut: ()=>{},
	getAuthToken: ()=>{},
});

// TODO: implement a timer for authToken. it expires every hour
