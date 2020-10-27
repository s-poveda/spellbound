import React, { Component } from 'react';
import SpellCard from '../SpellCard/SpellCard';
import PropTypes from 'prop-types';
import './SpellList.css';

export  default class SpellList extends Component {

	static defaultProps = { spells: []}

	mapPassedSpells() {
		console.log('maping', <SpellCard />);
		// return this.props.spells
		return [{key: 'value'}].map( (spell, i) =>
		// FIXME: ^^^ this is only basic render smoke test
		<SpellCard spell={spell} key={i} />)
	}

	render() {
		const mappedSpells = this.mapPassedSpells();
		return (
			<section className='main-content-list'>
				<h2>{this.props.title}</h2>
				{mappedSpells}
			</section>
		);
	}
}

SpellList.propTypes = {
	title: PropTypes.string,
	// spells: PropTypes.object.isRequired
}
// TODO: ^^^^^^^ should be changed soon (after creating mock data or getting api up)
