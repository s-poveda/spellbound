import React, { Component, Fragment } from 'react';
import ApiContext from '../../Context/ApiContext';
import SpellList from '../SpellList/SpellList.js';
import './LandingPage.css';


export  default class LandingPage extends Component {
	render() {
		return (
				<ApiContext.Consumer>
				{ ({spells}) => {
				const { recentlyAdded =[], popular=[] } = spells;
				//each spell list return a section
				return (
					<Fragment>
					<h3>
						Your one stop for creating and sharing custom spell ideas for any game!
					</h3>
					<div className='main-content'>
						<SpellList spells={recentlyAdded} title='Recently Added'/>
						<SpellList spells={popular} title='Popular'/>
					</div>
					</Fragment>
				);
			}}
				</ApiContext.Consumer>
		);
	}
}
