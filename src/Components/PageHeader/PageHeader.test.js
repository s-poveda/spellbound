import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './PageHeader';
import renderWithRouter from '../Utils/renderWithRouter';

describe('PageHeader', function () {

	it('renders without crashing', () => {
		renderWithRouter(<PageHeader />, { route: '/'})
	});
});
