import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import useAuthUser from 'globals/AuthUser';
import Button from 'components/form/inputs/Button';

export default function Index() {
	const { dispatch, state: AuthUserState } = useAuthUser();
	const navigate = useNavigate();
	const handleClick = () => {
		dispatch({ type: 'logout' });
		navigate('/login');
	};

	useEffect(() => {
		if (!AuthUserState.user) {
			navigate('/login');
		}
	}, [AuthUserState.user]);

	return (
		<div>
			Index page
			<Link to={'/login'}> Go to login page </Link>
			<Link to={'/registration'}> Go to registration page </Link>
			<Button onClick={handleClick}> Logout </Button>
		</div>
	);
}
