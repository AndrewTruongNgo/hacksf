const routes = require('next-routes')();

routes
  .add('/athletes/new', '/athletes/new')
  .add('/athletes/:address', '/athletes/show')
  .add('/athletes/:address/requests', '/athletes/requests/index')
  .add('/athletes/:address/requests/new', '/athletes/requests/new');

module.exports = routes;
