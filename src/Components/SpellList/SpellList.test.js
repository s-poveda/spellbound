import React from 'react';
import ReactDOM from 'react-dom';
import SpellList from './SpellList';

describe('SpellList', function () {

	it('renders without crashing', () => {
			const div = document.createElement('div');
			ReactDOM.render(<SpellList />, div);
			ReactDOM.unmountComponentAtNode(div);
	});
});
