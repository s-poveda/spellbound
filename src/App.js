import  React from 'react';
import { Route } from 'react-router';
import LandingPage from './Components/LandingPage/LandingPage';
import  SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import  UserLoggedInContext from './UserLoggedInContext'
import './App.css';

class App extends React.Component {

  render() {
		// <Route exact path='/sign-up' component={SignUp}/>
		// <Route exact path='/login' component={Login}/>
			return (
				<UserLoggedInContext.Provider>
					<div className="App">
						<header className="App-header">
							{/* this header will changed based on if user is logged in with Context*/}
							<h1>
								SpellBound
							</h1>
							<ul>
								<li>
									<a href='#'>Sign in</a>
								</li>
								<li>
									<a href="#">Sign up +</a>
								</li>
							</ul>
						</header>
						<main>
							<Route exact path='/' component={LandingPage}/>
						</main>
					</div>
				</UserLoggedInContext.Provider>
			);
	}
}

export default App;
