var	mongoose = require('mongoose');
mongoose.set('debug',false);
module.exports = function() {
	var db = mongoose.connect('mongodb://localhost:27017/ajexports');

	require('../server/models/user.server.model');
	/*require('../server/models/group.server.model');
	require('../server/models/groupUser.server.model');
	require('../server/models/songinfo.model');
*/
	return db;
};
