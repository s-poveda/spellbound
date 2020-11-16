import React, { Component } from 'react';
import ApiContext from '../../Context/ApiContext';
import './createspellpage.css';

export default class CreateSpellPage extends Component {
	state = {
		title: {
			touched: false,
			value: '',
		},
		description: {
			touched: false,
			value: '',
		},
		optionalFields: [],
	}

	static contextType = ApiContext;

	submitSpell = (ev) => {
		ev.preventDefault();

	}

	renderOptionalFields() {
		// TODO: create optinal fields.
	}

  render() {
    return (
					<>
					<h2>Create</h2>
					<form onSubmit={this.submitSpell}>
						<input
							aria-label='spell title'
							placeholder='Spell Title'
							name='title'
							type='text'
						/>
						<textarea
							className=''
							aria-label='spell description'
							placeholder='Spell Description'
							name='description'
						/>
						{this.renderOptionalFields()}
						<button>Create Spell</button>
					</form>
					</>
				);
  }
};
