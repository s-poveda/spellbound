import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import './pageheader.css';

export default class PageHeader extends React.Component {
	state = {
		showingNav: false,
	};

	openNav= () => {
		this.setState({ showingNav: true });
		document.getElementById('sidenav').style.width = '250px';
	}

	closeNav= () => {
		this.setState({ showingNav: false });
		document.getElementById('sidenav').style.width = '0px';
	}

	render() {
		if (this.props.showTitleOnly === true)
			return (
				<header className='App-header'>
					<Link className='page-header-title' to='/'>
						<h1>SpellBound</h1>
					</Link>
				</header>
			);

		return (
			<AuthContext.Consumer>
				{({ loggedIn, logOut }) => {
					return (
						<header className='App-header'>
							{/* this header will changed based on if user is logged in with Context*/}
							<Link className='page-header-title' to='/'>
								<h1>SpellRidge</h1>
							</Link>
							<nav>
								<button className='open-nav' onClick={this.openNav}>&#9776;</button>
								<section className='sidenav' id='sidenav'>
									<button  className='closenav' onClick={this.closeNav}>&times;</button>
								{loggedIn() ? (
										<>
										<div>
											<Link to='/profile'>My Profile</Link>
										</div>
										<div>
											<Link to='/new'>New Spell+</Link>
										</div>
										<div>
											<Link to='/' onClick={logOut}>
												Log out
											</Link>
										</div>
										</>
								) : (
									<>
										<div>
											<Link to='/login'>Login</Link>
										</div>
										<div>
											<Link to='/signup'>Sign up +</Link>
										</div>
									</>
								)}
								</section>
							</nav>
							{/* TODO: Make a section with a short intro to the website*/}
						</header>
					);
				}}
			</AuthContext.Consumer>
		);
	}
}

PageHeader.defaultProps = { showTitleOnly: false };
