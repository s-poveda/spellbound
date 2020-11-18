import React, { Component, Fragment } from 'react';
import ApiContext from '../../Context/ApiContext';
import SpellList from '../SpellList/SpellList.js';
import './LandingPage.css';


export  default class LandingPage extends Component {
	render() {
		return (
				<ApiContext.Consumer>
				{ ({spells}) => {
				// const { recentlyAdded =[], popular=[] } = spells;
				//each spell list return a section
				const { allSpells } = spells;
				return (
					<Fragment>
					<h3 className='landing-page-description'>
						Your one stop for creating and sharing custom spell ideas for any game!
					</h3>
					<div className='main-content'>
						<SpellList spells={allSpells} title='Recently Added'/>
						<SpellList spells={allSpells} title='Popular'/>
					</div>
					</Fragment>
				);
			}}
				</ApiContext.Consumer>
		);
	}
}
