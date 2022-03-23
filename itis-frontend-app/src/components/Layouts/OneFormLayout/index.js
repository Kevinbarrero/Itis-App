import React from 'react';

import DefaultLayout from '../DefaultLayout/DefaultLayout';
import { Form, PageWrapper } from './components';

export default function OneFormLayout({ children }) {
	return (
		<DefaultLayout>
			<PageWrapper>
				<Form>{children}</Form>
			</PageWrapper>
		</DefaultLayout>
	);
}
