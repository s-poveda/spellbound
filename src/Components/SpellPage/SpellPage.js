import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import spellsService from '../../services/spellsService';

import './spellpage.css';

export default class SpellPage extends Component {
	state = {
		spell: {},
		loading: true,
		error: null,
	}

	async componentDidMount() {
		try {
			const spell = await spellsService.getSpellById(this.props.match.params.spellId);
			this.setState({	spell, loading: false });
		} catch (error) {
			this.setState({ error, loading: false })
		}
	}

  render() {
		const { title, description, author = {} } = this.state.spell;
    return (
			<>
			<article className='spell-page'>
				<h2 className='spell-title'>{title}</h2>
				<aside>
					<h4>Author:</h4>
					<Link to={`/users/${author.username}`}>{author.username}</Link>
				</aside>
			<p>{description}</p>
				</article>
				</>
    );
  }
};
