const emailRegExp =
	/^(([^<>()\\,;:\s@"]+(\.[^<>()\\,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function emailValidator(value) {
	return value === '' || emailRegExp.test(value) ? '' : 'Wrong email format';
}
