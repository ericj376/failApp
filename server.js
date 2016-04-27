var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var options = {
  server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};  
var mongodbUri = process.env.MONGODB_URI || "mongodb://localhost/fail";
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

console.log(mongooseUri);

mongoose.connect(mongooseUri, options, function(err, data){
        if(err){
  console.log('connection error', err);
} else {
  console.log('connection', data);
}
});


var passport = require('passport');
var failRouter = require('./routes/fail');
var session = require('express-session');

var comments = require('./models/comments');
var fail = require('./models/fail');
var ratings = require('./models/ratings');
var user = require('./models/user');
var categoryRouter = require('./routes/category')
var ratingsRouter = require('./routes/ratings')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({                     //configuring our app to tell it to use passport
 secret: 'ilovescotchscotchyscotchscotch'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(session({
 cookie: {
   maxAge: 60000
 }
}));



if (process.env.NODE_ENV === 'production') {
  console.log('Runnng in production mode');

  app.use('/static', express.static('static'));
} else {

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

require('./config/passport')(passport);
require('./routes/user.js')(app, passport);

app.use('/public', express.static('public'));
app.use('/api/fail', failRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/ratings', ratingsRouter);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var port = process.env.PORT || 5050;

app.listen(port, function(){
  console.log("🌞 🌞🌴🌞🌞🌴🌞🌞🌴🌞🌞🌴🌴🌞🌞🌴\n🌞🌞🌴🌞🌞🌴🌞🌞🌞🌴🌞🌞🌴🌞🌞 fired up  🌞🌞🌴🌞🌞🌞🌴🌞🌞🌴🌞🌞  \n 🌞🌞🌴🌞🌞🌞🌴🌞🌞🌞🌴🌞🌞 on " + port + "🌞🌞🌴🌞🌞🌴🌞🌞🌴🌞🌞🌴🌞🌞\n🌞🌞🌴🌞🌞🌴🌞🌞🌴🌞🌞🌞🌴🌞🌞🌴🌞🌞🌞🌴🌞🌞🌞🌴🌞🌞🌞🌴🌞🌞🌴🌴🌞")
});

