import React from 'react';

import BaseWrapper from './components/BaseWrapper';
import BaseInput from '../inputs/BaseInput';
import ShowError from './components/ShowError';

export default function TextField({ label, error, ...props }) {
	return (
		<BaseWrapper label={label}>
			<BaseInput isError={!!error} {...props} />
			<ShowError error={error} mt={0.25} />
		</BaseWrapper>
	);
}
