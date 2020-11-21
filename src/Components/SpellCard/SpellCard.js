import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SpellCard.css';

export default class SpellCard extends React.Component {

	state = {
		expanded: false,
	}

	onclick = (ev) =>{
			if (ev.target.classList.contains('copy-button')) return null;
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
				{
					this.state.expanded &&
					<>
					<p className='spell-card-description'>
					{description}
					</p>
					<div><Link to={`/users/${author.username}`} className='spell-card-author'>Created by {author.username}</Link></div>
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
