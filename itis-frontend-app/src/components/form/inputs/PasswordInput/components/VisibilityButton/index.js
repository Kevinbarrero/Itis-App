import React from 'react';

import { StyledButton } from './components';
import { ReactComponent as Visibility } from './icons/visibility.svg';
import { ReactComponent as VisibilityOff } from './icons/visibilityOff.svg';

export default function VisibilityButton({ isHidden, ...props }) {
	return (
		<StyledButton type="button" {...props}>
			{isHidden ? <VisibilityOff /> : <Visibility />}
		</StyledButton>
	);
}
