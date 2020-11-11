import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';

export default function PrivateRoute({ component, ...props }) {
	const Component = component;
	return (
		<AuthContext.Consumer>
			{({ loggedIn }) => {
				return <Route
					{...props}
					render={componentProps =>
						loggedIn() ? (
							<Component {...componentProps} />
						) : (
							<Redirect
								to={{
									pathname: '/login',
									state: { from: componentProps.location },
								}}
							/>
						)
					}
				/>
			}}
		</AuthContext.Consumer>
	);
}
