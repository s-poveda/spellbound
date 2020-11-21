import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import ProfilePage from './ProfilePage';

describe('ProfilePage', function() {
	it('renders without crashing', () => {
		render(<Router history={ createMemoryHistory({ initialEntries: ['/profile']}) }>
			<ProfilePage match={{ path: '/profile' }} />
			</Router>
		);
	})
});
