import $ from 'jquery';

export const concat = ({dispatch}) => dispatch('CONCAT')

export const login = ({dispatch, state}) => {
    if (!state.authenticated) {
        $.post('/api/authenticate', {username: 'mbhuiyan', password: 'test123'})
            .then(data => dispatch('LOGIN_SUCCESS', data.token))
            .fail(err => dispatch('LOGIN_ERROR'));
    }
}