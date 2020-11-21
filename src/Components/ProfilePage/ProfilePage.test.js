import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePage from './ProfilePage';
import renderWithRouter from '../Utils/renderWithRouter';

describe('ProfilePage', function () {

	it('renders without crashing', () => {
		renderWithRouter(<ProfilePage match={{ path: '/profile' }}/>, { route: '/profile'});
	});
});
