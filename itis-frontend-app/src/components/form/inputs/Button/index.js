import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button(
	({ disabled }) => css`
		border: 3px solid #bb7db2;
		border-radius: 6px;
		font-size: 1em;

		color: #484f4f;
		background-color: white;
		cursor: ${disabled ? 'not-allowed' : 'pointer'};
		opacity: ${disabled ? 0.5 : 1};
		transition-duration: 0.5s;
	`
);

export default function Button({ className, children, onClick, type = 'button', disabled }) {
	return (
		<StyledButton className={className} onClick={onClick} type={type} disabled={disabled}>
			{children}
		</StyledButton>
	);
}
