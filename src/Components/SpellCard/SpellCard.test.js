import React from 'react';
import ReactDOM from 'react-dom';
import SpellCard from './SpellCard';

describe('SpellCard', function () {

	it('renders without crashing', () => {
			const div = document.createElement('div');
			ReactDOM.render(<SpellCard />, div);
			ReactDOM.unmountComponentAtNode(div);
	});
});
