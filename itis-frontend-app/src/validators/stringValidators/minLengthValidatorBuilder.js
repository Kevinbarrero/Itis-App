const minLengthValidatorBuilder = (length) => (value) => {
	return value.trim().length >= length ? '' : `Field should contain more then ${length} symbols`;
};

export default minLengthValidatorBuilder;
