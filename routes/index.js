var _ = require('underscore'),
	landmark = require('landmark-serve'),
	middleware = require('./middleware'),
	importRoutes = landmark.importer(__dirname);

// Common Middleware
landmark.pre('routes', middleware.initLocals);
landmark.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
  api: importRoutes('./api'),
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {
  // CORS
  app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
	
	// Views
	app.get('/', routes.views.index);
  app.get('/locations', routes.views.locations);
  app.get('/locations/location/:location', routes.views.location);
	app.get('/tours', routes.views.tours);
	app.get('/tours/tour/:tour', routes.views.tour);
	
	
		
  // API
	app.all('/api*', landmark.initAPI);
		
	app.get('/api/location/list', landmark.initAPI, routes.api.locations.list);
	//app.all('/api/location/create', landmark.initAPI, routes.api.locations.create);
	app.get('/api/location/:id', landmark.initAPI, routes.api.locations.get);
	//app.all('/api/location/:id/update', landmark.initAPI, routes.api.locations.update);
	//app.get('/api/location/:id/remove', landmark.initAPI, routes.api.locations.remove);
		
	app.get('/api/tour/list', landmark.initAPI, routes.api.tours.list);
	//app.all('/api/tour/create', landmark.initAPI, routes.api.tours.create);
	app.get('/api/tour/:id', landmark.initAPI, routes.api.tours.get);
	//app.all('/api/tour/:id/update', landmark.initAPI, routes.api.tours.update);
	//app.get('/api/tour/:id/remove', landmark.initAPI, routes.api.tours.remove);
};
