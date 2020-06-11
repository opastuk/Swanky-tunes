import api from '../../config/api.json';
import axios from 'axios';
if (api.port.length === 0) {
	axios.defaults.baseURL = `https://${api.host}/`;
} else {
	axios.defaults.baseURL = `http://${api.host}:${api.port}/`;
}

export default axios.create({
});
