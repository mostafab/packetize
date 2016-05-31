'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import FixedHeader from './vue-templates/frame/header';
import SideNav from './vue-templates/frame/side-nav';
import store from './stores/store';

/* ---------------------------------------------------------- */

const app = new Vue({
    el: '#app',
    store,
    components: {
        FixedHeader,
        SideNav
    }
})


