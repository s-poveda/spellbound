import  React, { Component } from 'react';
import { Route } from 'react-router';
import LandingPage from './Components/LandingPage/LandingPage';
// import  SignUp from './Components/SignUp/SignUp';
// import Login from './Components/Login/Login';
import  UserLoggedInContext from './Context/UserLoggedInContext';
import ApiContext from './Context/ApiContext';
import './App.css';

export default class App extends Component {

	state = {
		spells: {
			new : [],
			popular: [],
			// 'requested' spells are the response of a search
			requested: [],
			// 'selected' is used when user clicks on a specific spell card
			selected: {}
		}
	}

	componentDidMount() {
		//api req
	}

  render() {
		const ApiConVal = {
			spells: this.state.spells
		}
		const UserLoggedInConVal = { loggedIn: true}
		// <Route exact path='/sign-up' component={SignUp}/>
		// <Route exact path='/login' component={Login}/>
			return (
				<UserLoggedInContext.Provider value={UserLoggedInConVal}>
				<ApiContext.Provider value={ApiConVal}>
					<div className="App">
						<header className="App-header">
							{/* this header will changed based on if user is logged in with Context*/}
							<h1>
								SpellBound
							</h1>
							<nav>
								<div>
									<a href='#/'>Sign in</a>
								</div>
								<div>
									<a href="#/">Sign up +</a>
								</div>
							</nav>
							{/* TODO: Make a section with a short intro to the website*/}
						</header>
						<main>
							<Route exact path='/' component={LandingPage}/>
						</main>
					</div>
				</ApiContext.Provider>
				</UserLoggedInContext.Provider>
			);
	}
}
