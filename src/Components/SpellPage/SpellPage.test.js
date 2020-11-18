import React from 'react';
import ReactDOM from 'react-dom';
import SpellPage from './SpellPage';

describe('SpellPage', function () {

	it('renders without crashing', () => {
			const div = document.createElement('div');
			ReactDOM.render(<SpellPage />, div);
			ReactDOM.unmountComponentAtNode(div);
	});
});
