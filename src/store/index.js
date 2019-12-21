import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({

    state: {
        logined: false,
        avatarBase: 'http://www.gravatar.com/avatar/',
        avatarTail: '?d=retro',
        admin: false,
    },
    mutations: {
        login(state) {
            state.logined = true;
        },
        logout(state) {
            state.logined = false;
        },
        setAdmin(state) {
            state.admin = true;
        }
    }
})