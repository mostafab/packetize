'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    authenticated: false,
    header: {
        headerTitle: 'Packetize',
        headerLinks: [
            {name: 'About'},
            {name: 'Login'}
        ]   
    }
}

const mutations = {
    LOGIN_SUCCESS (state) {
        state.header.headerTitle = 'Home';
        state.header.headerLinks = [
            {name: 'Logout'}
        ]
        state.authenticated = true;
    },
    LOGOUT (state) {
        state.header.headerTitle = 'Packetize';
        state.header.headerLinks = [
            {name: 'About'},
            {name: 'Login'}
        ]
        state.authenticated = false;
    },
    REGISTER (state) {
        state.registering = true;
    },
    CONCAT (state) {
        console.log(state);
        state.headerTitle += 'A';
    }
}

export default new Vuex.Store({
    state,
    mutations
})