import { gql } from '@apollo/client';

const SIGN_IN_MUTATION = gql`
	mutation signIn($login: String!, $password: String!) {
		signin(input: { email: $login, password: $password }) {
			accessToken
			me {
				avatarUrl
				email
				firstName
				id
				lastName
			}
			refreshToken
		}
	}
`;

export default async function signIn(client, params) {
	const {
		data: { signin }
	} = await client.mutate({ mutation: SIGN_IN_MUTATION, variables: params });
	return signin;
}
