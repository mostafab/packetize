import Joi from 'joi';

export default (server) => {
    server.route([
        {
            method: 'GET',
            path: '/api/sets',
            handler: (request, reply) => {
                    
            }
        },
        {
            method: 'POST',
            path: '/api/sets',
            handler: (request, reply) => {
                
            },
            config: {
                validate: {
                    payload: {
                        name: Joi.string().min(1).max(100)
                    }
                }
            }
        },
        {
            method: 'GET',
            path: '/api/sets/{id}',
            handler: (request, reply) => {
                reply(request.params);
            }
        },
        {
            method: ['PUT', 'PATCH'],
            path: '/api/sets/{id}',
            handler: (request, reply) => {
                reply(request.params);
            }
        },
        {
            method: 'DELETE',
            path: '/api/sets/{id}',
            handler: (request, reply) => {
                
            }
        }
    ])
}