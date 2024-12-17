const fastifyPlugin = require('fastify-plugin') 

async function apiPlugin(fastify,options) {
    fastify.register(require('./v1/V1Routes'), {prefix: '/v1'})
}

module.exports = apiPlugin