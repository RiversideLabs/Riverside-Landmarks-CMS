// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require landmark
var landmark = require('landmark-serve');

landmark.init({

	'name': 'Riverside Landmarks',
	'brand': 'Riverside Landmarks',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',
	
	
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'VyT7zrEvTsO2-Qw=F@Wrw06rsJqn*rJ>OVCl{BB*>L%}ets%|{gTH<qTXTb`@r.P'

});

landmark.import('models');

landmark.set('locals', {
	_: require('underscore'),
	env: landmark.get('env'),
	utils: landmark.utils,
	editable: landmark.content.editable
});

landmark.set('routes', require('./routes'));

landmark.set('nav', {
	'locations': ['locations', 'architectural-styles'],
	'tours': 'tours',
	'users': 'users'
});

landmark.start();
