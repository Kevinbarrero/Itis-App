import React from 'react';
import { LabelWrapper, StyledLabel } from './components';

export default function BaseWrapper({ label, children }) {
	return (
		<StyledLabel>
			<LabelWrapper>{label}</LabelWrapper>
			<div>{children}</div>
		</StyledLabel>
	);
}
