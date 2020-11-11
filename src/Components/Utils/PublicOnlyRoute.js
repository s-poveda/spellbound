import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';

export default function PublicOnlyRoute({ component, ...props }) {
	const Component = component;
	return (
		<AuthContext.Consumer>
			{({ loggedIn }) => {
				return <Route
					{...props}
					render={componentProps =>
						loggedIn() ? <Redirect to={'/'} /> : <Component {...componentProps} />
					}
				/>
			}}
		</AuthContext.Consumer>
	);
}
