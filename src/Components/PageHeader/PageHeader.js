import React from 'react';
import { Link } from 'react-router-dom';
import './pageheader.css';

export default function PageHeader(props) {
	if( props.showTitleOnly === true) return (
		<header className="App-header">
			<Link className='page-header-title' to='/'>
			<h1>
				SpellBound
			</h1>
		</Link>
		</header>
	);

  return (
			<header className="App-header">
				{/* this header will changed based on if user is logged in with Context*/}
				<Link className='page-header-title' to='/'>
				<h1>
					SpellBound
				</h1>
				</Link>
				<nav>
					<div>
						<Link to='/login'>Sign in</Link>
					</div>
					<div>
						<Link to="/signup">Sign up +</Link>
					</div>
				</nav>
				{/* TODO: Make a section with a short intro to the website*/}
			</header>
    );
};

PageHeader.defaultProps = { showTitleOnly: false }
