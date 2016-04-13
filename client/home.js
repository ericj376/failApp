var React = require('react');
var FailBox = require('./FailComps/FailBox');

var Home = React.createClass({
  render: function() {
    return(
      <div>
        <div>
          <div className="jumbotron">
            <h1 className="display-3">You must go through failure to reach success!</h1>
            <p className="lead"></p>
            <hr className="m-y-2"/>
            <h2>Why fail?</h2>
            <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
          </div>
        </div>
        <div>
          <FailBox />
        </div>
      </div>
    )
  }
});

module.exports = Home;