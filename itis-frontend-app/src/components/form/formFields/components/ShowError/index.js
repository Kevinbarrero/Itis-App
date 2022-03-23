import React from 'react';
import { Container } from './components';

export default function ShowError({ error, mt }) {
	return error ? <Container $mt={mt}>{error}</Container> : null;
}
