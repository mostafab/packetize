'use strict';

/* Header component */

<template>

    <div>
        <nav class='blue darken-4'>
            <div class='nav-wrapper'>
                <a v-on:click="login" class='brand-logo center'>{{ headerTitle }}</a>
                <ul id='nav-mobile' class='left hide-on-med-and-down' v-for='link in headerLinks'>
                    <li>
                        <a> {{ link.name }} </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    
</template>

<script>

    import * as actions from './../../actions/header-actions';

    export default {
        data () {
            return {
                
            }
        },
        vuex: {
            getters: {
                headerTitle: state => state.header.headerTitle,
                headerLinks: state => state.header.headerLinks
            },
            actions: actions
        }  
    }
</script>