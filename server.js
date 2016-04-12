var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var passport = require('passport');
var mongoose = require('mongoose');
var session = require('express-session');
mongoose.connect('mongodb://localhost/fail');
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


require('./config/passport')(passport);
// routes ======================================================================
require('./routes/user.js')(app, passport);

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

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var port = process.env.PORT || 5050;

app.listen(port, function(){
  console.log("🌞 🌞🌴🌞🌞🌴🌞🌞🌴🌞🌞🌴🌴🌞🌞🌴\n🌞🌞🌴🌞🌞🌴🌞🌞🌞🌴🌞🌞🌴🌞🌞 fired up  🌞🌞🌴🌞🌞🌞🌴🌞🌞🌴🌞🌞  \n 🌞🌞🌴🌞🌞🌞🌴🌞🌞🌞🌴🌞🌞 on " + port + "🌞🌞🌴🌞🌞🌴🌞🌞🌴🌞🌞🌴🌞🌞\n🌞🌞🌴🌞🌞🌴🌞🌞🌴🌞🌞🌞🌴🌞🌞🌴🌞🌞🌞🌴🌞🌞🌞🌴🌞🌞🌞🌴🌞🌞🌴🌴🌞")
});

