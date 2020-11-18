import React, { Component } from 'react';
import SpellCard from '../SpellCard/SpellCard';
import PropTypes from 'prop-types';
import './SpellList.css';

export  default class SpellList extends Component {

	static defaultProps = { spells: []}

	mapPassedSpells() {

		return this.props.spells.map( (spell) =>
		<SpellCard spell={spell} key={spell.id} />)
	}

	render() {
		const mappedSpells = this.mapPassedSpells();
		const { title } = this.props;
		return (
			<section className='main-content-list'>
				<h2>{title}</h2>
				<hr/>
				{mappedSpells}
				<hr/>
			</section>
		);
	}
}

SpellList.propTypes = {
	spells: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			description: PropTypes.string,
			title: PropTypes.string.isRequired,
		})
	),
}
