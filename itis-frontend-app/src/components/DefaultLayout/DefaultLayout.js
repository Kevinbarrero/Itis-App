import React from 'react';

import { Header, HeaderTitle, AppName, Content } from './components';

export default function DefaultLayout({ title, children }) {
	return (
		<Content>
			<Header>
				<HeaderTitle>{title}</HeaderTitle>
				<AppName>Task tracker</AppName>
			</Header>
			<main>{children}</main>
		</Content>
	);
}
