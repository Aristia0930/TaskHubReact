const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://port-0-taskhubspring-m5al105w4c7a25c2.sel4.cloudtype.app',
            changeOrigin: true,
        })
    );
};
