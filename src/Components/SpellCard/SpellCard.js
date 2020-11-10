import React from 'react';
import PropTypes from 'prop-types';
import './SpellCard.css';

export default function SpellCard(props) {
	const { title, description} = props.spell;
	return (
		<article className='spell-card'>
			<h3>{title}</h3>
			<span className='spell-card-span'>
				<p><b>Characteristic:</b> Value</p>
				<p><b>Damage Type:</b> Necrotic</p>
				<p><b>Range:</b> 5ft</p>
			</span>
			<p className='spell-card-description'>
			{description}
			</p>
		</article>
	);
}

SpellCard.defaultProps = { spell : {}}
SpellCard.propTypes ={
	spell: PropTypes.object
}
