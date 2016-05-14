export default (server) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (req, reply) => {
            return reply.view('index', 
                {
                    title: 'Welcome to my Hapi app!'
                }
            );
        }
    });
   
}