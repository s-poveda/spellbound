import  React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './Components/LandingPage/LandingPage';
import PageHeader from  './Components/PageHeader/PageHeader';
import  SignUpPage from './Components/SignUpPage/SignUpPage';
import LoginPage from './Components/LoginPage/LoginPage';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import CreateSpellPage from './Components/CreateSpellPage/CreateSpellPage';
import SpellPage from './Components/SpellPage/SpellPage';

import PublicOnlyRoute from './Components/Utils/PublicOnlyRoute';
import PrivateRoute from './Components/Utils/PrivateRoute';

import  AuthContext from './Context/AuthContext';
import ApiContext from './Context/ApiContext';

import spellsService from './services/spellsService';
import usersService from './services/usersService'
import tokenService from  './services/tokenService';
import './App.css';

export default class App extends Component {

	state = {
		spells: {
			allSpells: [],
		},
		error: null,
	}

	async componentDidMount() {
		await spellsService.getAllSpells()
			.then( spells => {
				this.setState({ spells: {
					allSpells: spells,
				}
			});
			})
			.catch(error=> this.setState({ error }));

			if (tokenService.hasAuthToken()) {
				const { exp } = tokenService.getPayload();
				//jwt's expiration is seconds since the epoch
				//JS uses millisecods, so times secods by 1000
				if (new Date(exp * 1000) < new Date()) {
					return tokenService.clearAuthToken();
				}
			}
	}

	updateSpellsList = ()=>{
	 spellsService.getAllSpells()
			.then( spells => {
				this.setState({ spells: {
					allSpells: spells,
				}
			});
			})
			.catch(error=> this.setState({ error }));
	}

	renderPublicOnlyMainRoutes() {
		return (
			<>
			<PublicOnlyRoute exact path='/signup' component={SignUpPage}/>
			<PublicOnlyRoute exact path='/login' component={LoginPage}/>
			</>
		);
	}

	renderPrivateOnlyRoutes() {
		return <>
		<PrivateRoute exact path='/profile' component={ProfilePage} />
		<PrivateRoute exact path='/new' component={CreateSpellPage} />
		</>
	}

	renderMainRoutes() {
		return (
			<>
			{this.renderPublicOnlyMainRoutes()}
			{this.renderPrivateOnlyRoutes()}
			<Route exact path='/' component={LandingPage}/>
			<Route exact path='/users/:username' component={ProfilePage}/>
			<Route exact path='/spells/:spellId' component={SpellPage} />
			</>
		);
	}

	renderHeader() {
		return <Switch>
		<Route exact path='/signup' render={()=> <PageHeader showTitleOnly={true} />} />
		<Route exact path='/login' render={()=> <PageHeader showTitleOnly={true} />} />
		<Route path='/' component={PageHeader} />
		</Switch>
	}

	shouldComponentUpdate( _, nextState) {
		if (nextState.error) {
			throw nextState.error;
		}
		return true;
	}

  render() {
		const ApiConVal = {
			spells: {
				allSpells: this.state.spells.allSpells,
			},
			updateSpellsList: this.updateSpellsList,
			submitSpell: spellsService.postSpell,
			getUserProfile: usersService.getUserProfile,
			getSpell: spellsService.getSpell,
		};

		const AuthConVal = {
			loggedIn: tokenService.hasAuthToken,
			logOut: tokenService.clearAuthToken,
			saveAuthToken: tokenService.saveAuthToken,
			getAuthToken: tokenService.getAuthToken,
		};
			return (
				<AuthContext.Provider value={AuthConVal}>
				<ApiContext.Provider value={ApiConVal}>
					<div className="App">
						{this.renderHeader()}
						<main className="flex-container">
							{this.renderMainRoutes()}
						</main>
					</div>
				</ApiContext.Provider>
				</AuthContext.Provider>
			);
	}
}
