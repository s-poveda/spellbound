import React from 'react';
import PropTypes from 'prop-types';
import './SpellCard.css';

export default function SpellCard() {
	return (
		<article className="spell-car">
			<h3>Each spell has a title</h3>
			<span className="spell-card-span">
				<p><b>Characteristic:</b> Value</p>
				<p><b>Damage Type:</b> Necrotic</p>
				<p><b>Range:</b> 5ft</p>
			</span>
		</article>
	);
}

SpellCard.defaultProps = { spell : {}}
SpellCard.propTypes ={
	spell: PropTypes.object
}
