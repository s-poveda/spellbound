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
			const data = await usersService.getOwnProfile();
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
			<div>

			</div>
		);
	}

  render() {
		const spells = this.state.spells.owned;
    return (
			<>
				{this.renderUserDetails()}
					<SpellList title='Your Creations' spells={spells}/>
			</>
    );
  }
};
