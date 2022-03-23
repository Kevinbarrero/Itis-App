import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import { useApolloClient } from '@apollo/client';

import { ACCESS_TOKEN, REFRESH_TOKEN } from 'constants/authKeys';
import currentUserQuery from 'api/query/currentUser';

const INITIAL_STATE = { user: null, isLoading: null };

const UserContext = createContext();

function reducer(state, action) {
	switch (action.type) {
		case 'loading':
			return {
				...state,
				isLoading: true
			};
		case 'loaded':
			localStorage.setItem(ACCESS_TOKEN, action.payload.accessToken);
			localStorage.setItem(REFRESH_TOKEN, action.payload.refreshToken);
			return {
				user: action.payload.me,
				isLoading: false
			};
		case 'logout':
			localStorage.removeItem(ACCESS_TOKEN);
			localStorage.removeItem(REFRESH_TOKEN);
			return INITIAL_STATE;
		default:
			return state;
	}
}

export function AuthUser({ children }) {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	const value = useMemo(() => ({ state, dispatch }), [state]);

	const client = useApolloClient();
	useEffect(async () => {
		const accessToken = localStorage.getItem(ACCESS_TOKEN);
		const refreshToken = localStorage.getItem(REFRESH_TOKEN);
		if (!!accessToken && !!refreshToken) {
			dispatch({ type: 'loading' });
			const me = await currentUserQuery(client);
			dispatch({
				type: 'loaded',
				payload: {
					me,
					refreshToken,
					accessToken
				}
			});
		}
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default function useAuthUser() {
	return useContext(UserContext);
}
