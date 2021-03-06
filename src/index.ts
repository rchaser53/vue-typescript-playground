import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';

import { router } from './router';

Vue.use(Vuex);

new Vue({
	el: '#app',
	router,
	store
});
