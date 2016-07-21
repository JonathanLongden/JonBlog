var express = require('express');
//var cors = require('cors'); // before you push up to Heroku for mlab
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');//local auth
var session = require('express-session');//session


var userControl = require('./controllers/userControl.js');
var postControl = require('./controllers/postControl.js');
var config = require('./config.js');
var configSession = require('./passport/setsercets.js');

var app = express();

require('./passport/passport.js')(passport);//self invokes passport

app.use(session(configSession));//set session secret
app.use(passport.initialize());//initialize passport
app.use(passport.session());//configure session through passport. Starts session on login
//app.use(cors()); // before you push up to Heroku for mlab
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/views'));


app.post('/login', userControl.login);
app.post('/signup', userControl.signup);
app.get('/logout', userControl.logout);


app.get('/users', userControl.getAllUsers);
app.get('/user', userControl.getOneUser);
app.put('/user/:id', userControl.update);
app.delete('/user/:id', userControl.delete);

app.post('/posts', postControl.create);
app.get('/posts', postControl.read);
app.put('/posts/:id', postControl.update);
app.delete('/posts/:id', postControl.delete);
app.get('/posts/:id', postControl.readById);




if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);


  
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!
  var watcher = chokidar.watch('./server');
  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach(function(id) {
        if (/\/server\//.test(id)) delete require.cache[id];
      });
    });
  });
}





mongoose.connect(
    //"mongodb://localhost:27017/Blog",
    config.mongo_uri 

);
// for mongolab

mongoose.connection.once('open', function(){
	console.log("Connected to your database.");
});



app.get('/', function(req, res){
	res.render('index');
});





app.listen(config.port, function(){
	console.log("Showing off our Blog on " + config.port);
});
