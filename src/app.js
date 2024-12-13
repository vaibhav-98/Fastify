const fastifyPlugin = require('fastify-plugin');
const servicePlugin = require('./services/servicePlugin');



async function app(fastify,options) {
    fastify.register(require('@fastify/cors'))

    fastify.register(servicePlugin)

    // register test routes 
    fastify.register(require('./routes/testRoutes'), { prefix: '/test' });
}


module.exports = fastifyPlugin(app)