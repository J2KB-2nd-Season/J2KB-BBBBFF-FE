const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware( {
      target: 'http://118.67.128.131:8080',
      changeOrigin: true,
    })
  );
};