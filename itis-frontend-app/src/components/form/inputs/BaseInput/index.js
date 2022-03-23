import React from 'react';

import { Container, SlotContainer, StyledInput } from './components';

export default function BaseInput({ className, leftSlot, rightSlot, isError, ...props }) {
	return (
		<Container className={className} $isError={isError}>
			{leftSlot && <SlotContainer>{leftSlot}</SlotContainer>}
			<StyledInput {...props} />
			{rightSlot && <SlotContainer>{rightSlot}</SlotContainer>}
		</Container>
	);
}
