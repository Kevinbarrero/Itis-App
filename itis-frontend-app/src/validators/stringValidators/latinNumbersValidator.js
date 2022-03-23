const regExp = /^[a-zA-Z\d\s]+$/;

export default function latinNumbersValidator(value) {
	return regExp.test(value) ? '' : 'Field should contain latin symbols and numbers';
}
