import React, { Component } from 'react';
import SpellCard from '../SpellCard/SpellCard'

export  default class LandingPage extends Component {

	mapPassedSpells() {
		this.props.spells.map( spell =>
		<SpellCard spell={spell}/>)
	}

	render() {

		return (
			<section>
				<h2>this renders</h2>
				{this.mapPassedSpells()}
			</section>
		);
	}
}
