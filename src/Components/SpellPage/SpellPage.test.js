import React from 'react';
import ReactDOM from 'react-dom';
import SpellPage from './SpellPage';
import renderWithRouter from '../Utils/renderWithRouter';

describe('SpellPage', function () {

	it('renders without crashing', () => {
			renderWithRouter(<SpellPage />, {route: '/spells/1'});
	});
});
