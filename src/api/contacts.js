import request from './Request.js';

const contactsRequest = {
	getContacts: () => {
		return request.get('/contacts');
	}
};

export default contactsRequest;
