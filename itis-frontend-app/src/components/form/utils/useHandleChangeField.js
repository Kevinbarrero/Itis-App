import { useCallback } from 'react';

export default function useHandleChangeField(stateSetter) {
	return useCallback((event) => {
		const { value, id } = event.target;
		const { type } = event;

		stateSetter((currentState) => ({
			...currentState,
			[id]: type === 'blur' ? value.trim() : value
		}));
	}, []);
}
