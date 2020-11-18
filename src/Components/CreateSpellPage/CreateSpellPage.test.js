import React from 'react';
import ReactDOM from 'react-dom';
import CreateSpellPage from './CreateSpellPage';

describe('CreateSpellPage', function () {

	it('renders without crashing', () => {
			const div = document.createElement('div');
			ReactDOM.render(<CreateSpellPage />, div);
			ReactDOM.unmountComponentAtNode(div);
	});
});
