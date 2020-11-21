import React from 'react';
import PageHeader from './PageHeader';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
describe('PageHeader', function () {

	it('renders without crashing', () => {
		render(<Router history={ createMemoryHistory({ initialEntries: ['/']}) }>
			<PageHeader match={{ path: '/' }} />
			</Router>
		);
	});
});
