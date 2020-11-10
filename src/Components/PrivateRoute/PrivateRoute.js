import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { hasAuthToken } from '../services/tokenService';

export default function PrivateRoute({ component, ...props }) {
	const Component = component;
	return (
		<Route
			{...props}
			render={componentProps =>
				hasAuthToken() ? (
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
	);
}
