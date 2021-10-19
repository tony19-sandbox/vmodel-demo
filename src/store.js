import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: {
      namespaced: true,
      state: () => ({
        loading: true,
      }),
      mutations: {
        TOGGLE_LOADING(state) {
          state.loading = !state.loading
        },
      },
    },
  },
})
