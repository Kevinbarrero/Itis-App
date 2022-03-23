import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import GlobalStyles from 'globals/styles';
import ApolloClient from 'api/ApolloClient';

import App from './App';

ReactDOM.render(
	<ApolloProvider client={ApolloClient}>
		<React.StrictMode>
			<GlobalStyles />
			<App />
		</React.StrictMode>
	</ApolloProvider>,
	document.getElementById('root')
);
