import $ from 'jquery';

export const concat = ({dispatch}) => dispatch('CONCAT')

export const login = ({dispatch, state}) => {
    if (!state.authenticated) {
        $.post('/api/authenticate').
            then(data => dispatch('LOGIN_SUCCESS')).
            fail(err => dispatch('LOGIN_ERROR'));
    }
}