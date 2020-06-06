import request from './Request.js';

const mailRequest = {
	postMail: (formData) => {
		return request.post('/mail', formData);
	}
};

export default mailRequest;
