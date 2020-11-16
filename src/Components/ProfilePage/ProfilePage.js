import React, { Component } from 'react';
import usersService from '../../services/usersService';
import SpellList from '../SpellList/SpellList';
import './profilepage.css';

export default class ProfilePage extends Component {
	state = {
		userDetails: {},
		spells: {
			owned : [],
		},
		loading:false,
		error: null,
	}

	async componentDidMount() {
		try {
			this.setState({ loading: true });
			let data = null;

			if (this.props.match.path === '/profile') {
				data = await usersService.getOwnProfile();
			} else {
				data = await usersService.getUserProfile(this.props.match.params.username);
			}

			const state = Object.assign({}, this.state, { loading: false });
			state.spells.owned = data.spells;
			state.userDetails = data.userDetails;
			this.setState(state);
		} catch (error) {
			this.setState({ error })
		}
	}

	renderUserDetails() {
		return (
			<section>
				<h2>{this.state.userDetails.username}</h2>
			</section>
		);
	}

  render() {
		const spells = this.state.spells.owned;
    return (
			<>
				{this.renderUserDetails()}
				<SpellList title={(this.props.match.path === '/profile') ? 'Your Creations' : 'Created Spells'} spells={spells}/>
			</>
    );
  }
};
