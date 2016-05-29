import {generateToken, verifyToken} from './../../../auth/token';
import Joi from 'joi';

export default (server) => {
    server.route([
        {
            method: 'POST',
            path: '/api/authenticate',
            handler: (request, reply) => {
                generateToken()
                    .then(token => reply({success: true, token: token}))
                    .catch(err => reply({success: false, error: err}));                    
            },
            config: {
                validate: {
                    payload: {
                        username: Joi.string().min(7).max(20).required(),
                        password: Joi.string().min(7).max(20).required()
                    }
                }
            }  
        },
        {
            method: 'GET',
            path: '/api/authenticate',
            handler: (request, reply) => {
                verifyToken()
                    .then(verified => {
                       reply({verified: verified}); 
                    })
                    .catch(err => {
                        reply({error: err});
                    });
            },
            config: {
                validate: {
                    query: {
                        token: Joi.string().required()
                    }
                }
            }
        }
    ])
}