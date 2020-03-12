import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {},
  },
  mutations: {
    setCustomsData(state, val) {
      // console.log(val);
      // eslint-disable-next-line no-undef
      state.form = val;
    },
  },
  actions: {
  },
  modules: {
  },
});
