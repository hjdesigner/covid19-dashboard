import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    global: {},
  },
  mutations: {
    getInfo(state) {
      axios.get('https://api.covid19api.com/summary')
        .then((result) => {
          state.global = result.data.Global;
        });
    },
  },
  actions: {
  },
  modules: {
  },
});
