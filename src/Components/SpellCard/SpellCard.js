import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SpellCard.css';

export default class SpellCard extends React.Component {

	state = {
		expanded: false,
	}

	onclick = (ev) =>{
		console.log(ev);
		this.setState({ expanded: !this.state.expanded });
	}

	onKeyPress = (ev) => {
		if (ev.charCode === 13) {
			this.setState({ expanded: !this.state.expanded });
		}
	}
	render () {
		const { title, description, author} = this.props.spell;
		return (
			<article className='spell-card' onClick={this.onclick} onKeyPress={this.onKeyPress} tabIndex={0}>
				<h3>{title}</h3>
				<section className='spell-card-section'>
					<p><b>Characteristic:</b> Value</p>
					<p><b>Damage Type:</b> Necrotic</p>
					<p><b>Range:</b> 5ft</p>
				</section>
				{
					this.state.expanded &&
					<>
					<p className='spell-card-description'>
					{description}
					</p>
					<Link to={`/users/${author.username}`} className='spell-card-author'>Created by {author.username}</Link>
					</>
				}
			</article>
		);

	}
}

SpellCard.defaultProps = { spell : {}}
SpellCard.propTypes ={
	spell: PropTypes.object
}
