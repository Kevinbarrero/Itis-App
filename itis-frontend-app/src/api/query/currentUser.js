import { gql } from '@apollo/client';

const USER_ME_QUERY = gql`
	query currentUser {
		me {
			avatarUrl
			email
			firstName
			id
			lastName
		}
	}
`;

export default async function currentUserQuery(client) {
	const {
		data: { me }
	} = await client.query({ query: USER_ME_QUERY });
	return me;
}
