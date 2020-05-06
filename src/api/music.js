import request from './Request.js';

const musicRequest = {
	getTracks: () => {
		return request.get('/music');
	}
};

export default musicRequest;
