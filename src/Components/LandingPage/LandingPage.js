import React, { Component, Fragment } from 'react';
import ApiContext from '../../Context/ApiContext';
import SpellList from '../SpellList/SpellList.js';
import './LandingPage.css';


export  default class LandingPage extends Component {
	render() {
		return (
				<ApiContext.Consumer>
				{ ({spells}) => {
				//each spell list return a <section>
				const { allSpells } = spells;
				return (
					<Fragment>
					<p className='landing-page-description'>
						Your one stop for creating and sharing custom spell ideas for any game!
						<br/>
						<br/>
						Want to make your own spell ideas? Sign up!
					</p>
					<aside>
					<p>
					<strong>Demo User:</strong> <em>Demo User</em>
					</p>
					<p>
					<strong>Demo Password:</strong> <em>DemoPassword1!</em>
					</p>
					</aside>
					<div className='main-content'>
						<SpellList spells={allSpells} title='Recently Added'/>
					</div>
					</Fragment>
				);
			}}
				</ApiContext.Consumer>
		);
	}
}
