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
						<SpellList spells={recentlyAdded} />
						<SpellList spells={popular} />
					</Fragment>
				);
			}}
				</ApiContext.Consumer>
		);
	}
}
