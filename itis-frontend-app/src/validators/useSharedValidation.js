import { useEffect, useState } from 'react';

export default function useSharedValidation(formState, validationConfig) {
	const [errorsState, setErrorsState] = useState(formState);
	const [fieldTouched, setFieldTouched] = useState({});
	const [isHasError, setIsHasError] = useState(false);

	Object.entries(validationConfig).forEach(([field, validator]) => {
		useEffect(() => {
			if (fieldTouched[field]) {
				setErrorsState((currentState) => ({
					...currentState,
					[field]: validator(formState[field])
				}));
			} else {
				setFieldTouched((currentState) => ({ ...currentState, [field]: true }));
			}
		}, [formState[field]]);
	});

	useEffect(() => {
		setIsHasError(() => Object.values(errorsState).some((value) => !!value));
	}, [errorsState]);

	return [errorsState, isHasError];
}
