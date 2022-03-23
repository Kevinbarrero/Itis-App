export default function getFirstError(validators, value) {
	for (const validator of validators) {
		const error = validator(value);
		if (error) {
			return error;
		}
	}
	return '';
}
