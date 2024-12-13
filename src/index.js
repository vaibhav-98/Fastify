const app = require('./app');

const fastify = require('fastify')({logger:true}); // calling the fastify constructor 

const PORT = 3500;


fastify.register(app)

// fastify.get('/ping', (request, reply) => {
//     // Responding with a JSON object
//     reply.send({ data: 'pong' });
// });

fastify.listen({port: PORT}, (err) => {
    if(err) {
        fastify.log.error(err);
        process.exit(1)
    }
    console.log(`Server up at port ${PORT}`);
    
})


