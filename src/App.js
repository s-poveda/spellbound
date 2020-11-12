import  React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import PageHeader from  './Components/PageHeader/PageHeader';
import  SignUpPage from './Components/SignUpPage/SignUpPage';
import LoginPage from './Components/LoginPage/LoginPage';
import ProfilePage from './Components/ProfilePage/ProfilePage';
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
			// new : [],
			// popular: [],
			owned: [],
			// 'requested' spells are the response of a search
			requested: [],
			// 'selected' is used when user clicks on a specific spell card
			selected: {},
		},
		error: null,
	}

	async componentDidMount() {
		// TODO: use a 'loading' property in state to display loading spinner
		await spellsService.getAllSpells()
			.then( spells => {
				this.setState({ spells: {
					allSpells: spells,
				}
			});
			})
			.catch(error=> this.setState({ error }));

			if (tokenService.hasAuthToken()) {
				const {sub: username} = JSON.parse(atob(tokenService.getAuthToken().split('.')[1]))
				usersService.getUserProfile(username)
				.then( data => {
					const spells = Object.assign({}, this.state.spells);
					spells.owned = data.spells;
					this.setState({ spells });
				});
			}
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
		</>
	}

	renderMainRoutes() {
		return (
			<>
			{this.renderPublicOnlyMainRoutes()}
			{this.renderPrivateOnlyRoutes()}
			<Route exact path='/' component={LandingPage}/>
			<Route exact path='/users/:userId' component={ProfilePage}/>
			</>
		);
	}

	renderHeader() {
		return <>
		<Route exact path='/signup' render={()=> <PageHeader showTitleOnly={true} />} />
		<Route exact path='/login' render={()=> <PageHeader showTitleOnly={true} />} />
		<Route path='/' component={PageHeader} />
		</>
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
			submitSpell: spellsService.postSpell,
			getUserProfile: usersService.getUserProfile,
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
