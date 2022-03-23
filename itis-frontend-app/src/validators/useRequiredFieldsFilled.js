import { useEffect, useState } from 'react';

export default function useRequiredFieldsFilled(state, fields) {
	const [isFilled, setIsFilled] = useState(false);

	useEffect(() => {
		setIsFilled(fields.every((field) => !!state[field]));
	}, [state]);

	return isFilled;
}
