import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state () {
    return {
      token: ""
    }
  },
  mutations: {

    // トークンの保存
    saveToken (state, token) {
      state.token = token
    },

    // トークンの削除
    removeToken(state){
        state.token = ""
    }
  },
  actions: {
    saveToken({commit}, token){
        commit("saveToken",token)
    },
    removeToken({commit}){
        commit("removeToken")
    }
  },
  getters: {
    getToken(state){
        return state.token
    }
  }
})

export default store