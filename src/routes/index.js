import jwt from 'jsonwebtoken';

export default (server) => {
    server.route([
        {
            method: 'GET',
            path: '/',
            handler: (request, reply) => {
                reply.view('index');
            }
        },
        {
            method: 'POST',
            path: '/login',
            handler: (request, reply) => {
                reply({success: true});
            }
        }
    ]);
   
}