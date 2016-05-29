'use strict';

import Vue from 'vue';
import FixedHeader from './vue-templates/header/header';
import store from './stores/store';

/* ---------------------------------------------------------- */

const app = new Vue({
    el: '#app',
    store,
    components: {
        FixedHeader
    }
})


