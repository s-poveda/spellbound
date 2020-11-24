import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
		submitSuccess: false,
		error: null,
	};

	static contextType = ApiContext;

	// these are used to refocus an element if a user provided incorrect data
	titleRef = React.createRef();
	descriptionRef = React.createRef();

	validateInput() {
		//throws if either title or description are empty or have only white spaces
		//refocuses the element that triggered the validation error
		if (!this.state.title.touched || !this.state.title.value.trim().length || !this.state.description.touched || !this.state.description.value.trim().length) {
			 if (!this.state.title.touched || !this.state.title.value.trim().length){
				 this.titleRef.current.focus();
			 } else if (!this.state.description.touched || !this.state.description.value.trim().length){
				 this.descriptionRef.current.focus();
			 }
			 throw new Error('Title and description are required.');
		}
	}

	submitSpell = async ev => {
		ev.preventDefault();
		try {
			this.validateInput();
			await this.context.submitSpell({
				title: this.state.title.value.trim(),
				description: this.state.description.value.trim(),
			});
			this.setState({ submitSuccess: true });
			this.context.updateSpellsList();
		} catch (error) {
			this.setState({ error });
		}
	};

	onInputChange = ev => {
		const state = Object.assign({}, this.state);
		state[ev.target.name].value = ev.target.value;
		state[ev.target.name].touched = true;
		this.setState(state);
	}

	render() {
		if (this.state.submitSuccess === true) return <Redirect to={{ pathname: '/profile', state: { from: '/' } }} />;

		return (
			<>
				<h2 className='create-spell-title'>Create a New Spell</h2>
				<form onSubmit={this.submitSpell} id='create-form'>
					<div>
						<input
							onChange={this.onInputChange}
							value={this.state.title.value}
							ref={this.titleRef}
							className='spell-title-input'
							aria-label='spell title'
							placeholder='Spell Title'
							name='title'
							type='text'
						/>
					</div>
					<div>
					<textarea
						onChange={this.onInputChange}
						value={this.state.description.value}
						ref={this.descriptionRef}
						className=''
						aria-label='spell description'
						placeholder='Spell Description'
						name='description'
					/>
					</div>
					<button>Create Spell</button>
				</form>
				{ !!this.state.error &&
					<p>{this.state.error.message}</p>
				}
			</>
		);
	}
}
