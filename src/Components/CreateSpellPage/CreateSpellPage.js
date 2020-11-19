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
		return (
			<div className='optional-fields'>
				<h3>Optional Stats</h3>
				<div className='optional-pair'>
					<input
						aria-label='type the name of an optional detail. For example: "Range", or "Damage Type"'
						placeholder='Name ex:"Range"'
					/>
					<input
						aria-label='type the value of the optional detail. For example: "25 feet", or "Poison"'
						placeholder='Value ex:"25ft"'
					/>
				</div>
			</div>
		);
	}

  render() {
    return (
					<>
					<h2 className='create-spell-title'>Create</h2>
					<form onSubmit={this.submitSpell} id='create-form'>
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
