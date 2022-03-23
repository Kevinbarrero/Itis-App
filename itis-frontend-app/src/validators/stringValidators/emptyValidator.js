export default function emptyValidator(value) {
	return !value ? 'Field required' : '';
}
