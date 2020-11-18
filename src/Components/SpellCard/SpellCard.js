import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import $ from 'jquery';
import './SpellCard.css';

export default class SpellCard extends React.Component {

	state = {
		expanded: false,
	}

	onclick = (ev) =>{
			if (Object.values(ev.target.classList).includes('copy-button')) return null;
		this.setState({ expanded: !this.state.expanded });
	}

	onKeyPress = (ev) => {
		if (ev.charCode === 13) {
			this.setState({ expanded: !this.state.expanded });
		}
	}

// FIXME: make copy work
	copyToClipboard = (ev) => {
		const a = $(ev.target).focus();
		a.select();
		document.execCommand('copy');
		console.log(a,window.location.href);
	}

	render () {
		const { id, title, description, author} = this.props.spell;
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
					<div><Link to={`/users/${author.username}`} className='spell-card-author'>Created by {author.username}</Link></div>
					<button className='copy-button' onClick={this.copyToClipboard} url={`${window.hostname}/spells/${id}`}>Copy Link</button>
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
