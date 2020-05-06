import api from '../../config/api.json';
import axios from 'axios';
if (api.port.length === 0) {
	axios.defaults.baseURL = `http://${api.host}/`;
}

export default axios.create({
});
