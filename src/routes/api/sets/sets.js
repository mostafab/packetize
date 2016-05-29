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
                        'set-name': Joi.string().min(1).max(100)
                    }
                }
            }
        }
    ])
}