import Vue from 'vue';
import Vuex from 'vuex';
import ru from '../../config/ru.json';
import en from '../../config/en.json';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		lang: 'en',
		descr: en,
	},
	getters: {
	},
	mutations: {
		setTranslation: (state, payload) => {
			state.lang = payload;
			if (payload === 'ru') {
				state.descr = ru;
			} else {
				state.descr = en;
			}
		}
	},
	actions: {
	},
	modules: {
	},
});
