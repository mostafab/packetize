export default (server) => {
    server.route([
        {
            method: 'GET',
            path: '/',
            handler: (request, reply) => {
                reply.view('index');
            }
        }
    ]);
   
}