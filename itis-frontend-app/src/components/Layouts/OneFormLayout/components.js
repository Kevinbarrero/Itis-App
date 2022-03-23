import styled from 'styled-components';

export const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Form = styled.form`
	font-size: 1.5em;
	margin-top: 20vh;
	max-width: 15em;
	min-width: 10em;

	> * {
		margin-bottom: 0.5em;
	}
`;
