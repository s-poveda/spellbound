import React, { Component } from 'react';
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
					<div className='main-content'>
						<SpellList spells={recentlyAdded} />
						<SpellList spells={popular} />
					</div>
				);
			}}
				</ApiContext.Consumer>
		);
	}
}
