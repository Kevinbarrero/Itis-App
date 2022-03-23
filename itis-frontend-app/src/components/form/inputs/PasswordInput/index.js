import React, { useCallback, useState } from 'react';

import VisibilityButton from './components/VisibilityButton';
import BaseInput from '../BaseInput';

export default function PasswordInput({ leftSlot, type, ...props }) {
	const [isHidden, setIsHidden] = useState(true);

	const onVisibilityButtonClick = useCallback(() => {
		setIsHidden((state) => !state);
	}, []);
	return (
		<BaseInput
			type={isHidden ? 'password' : 'text'}
			rightSlot={<VisibilityButton isHidden={isHidden} onClick={onVisibilityButtonClick} />}
			{...props}
		/>
	);
}
