import React from 'react';
import SpellPage from './SpellPage';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
describe('SpellPage', function () {

	it('renders without crashing', () => {
			render(<Router history={ createMemoryHistory({ initialEntries: ['/spells/1']}) }>
				<SpellPage />
				</Router>
			);
	});
});
