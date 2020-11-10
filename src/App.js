import  React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import PageHeader from  './Components/PageHeader/PageHeader';
import  SignUpPage from './Components/SignUpPage/SignUpPage';
import LoginPage from './Components/LoginPage/LoginPage';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import  AuthContext from './Context/AuthContext';
import Api from './services/spellsService';
import ApiContext from './Context/ApiContext';
import './App.css';

export default class App extends Component {

	state = {
		spells: {
			allSpells: [],
			new : [],
			popular: [],
			// 'requested' spells are the response of a search
			requested: [],
			// 'selected' is used when user clicks on a specific spell card
			selected: {},
			error: null,
		}
	}

	componentDidMount() {
		Api.getAllSpells()
			.then( spells => {
				this.setState({ spells: {
					allSpells: spells,
				}
			});
		// TODO: use a 'loading' property in state to display loading spinner
			})
			.catch(error=> this.setState({ error }))
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
			}
		};
		const AuthConVal = { loggedIn: true };
			return (
				<AuthContext.Provider value={AuthConVal}>
				<ApiContext.Provider value={ApiConVal}>
					<div className="App">
						<Route exact path='/' component={PageHeader} />
						<Route exact path='/signup' render={()=> <PageHeader showTitleOnly={true} />} />
						<Route exact path='/login' render={()=> <PageHeader showTitleOnly={true} />} />
						<main className="flex-container">
							<Route exact path='/' component={LandingPage}/>
							<Route exact path='/signup' component={SignUpPage}/>
							<Route exact path='/login' component={LoginPage}/>
							<Route exact path='/users/:userId' component={ProfilePage}/>
						</main>
					</div>
				</ApiContext.Provider>
				</AuthContext.Provider>
			);
	}
}
