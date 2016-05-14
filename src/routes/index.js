export default (server) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (req, res) => {
            return res({hello: 'world'});
        }
    });
   
}