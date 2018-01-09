var configValues = require('./config');

module.exports = {

   getDBConnectionString: function() {
       return 'mongodb://' + configValues.uname + ':' 
       + configValues.pwd + 
       '@ds245337.mlab.com:45337/nodetodolist';
   }

}