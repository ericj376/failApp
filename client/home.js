var React = require('react');
var FailBox = require('./FailComps/FailBox');

var Home = React.createClass({
  render: function() {
    return(
      <div className="failBoxColor">
        <div>
          <div className="jumbotron">
            <h1 className="jumboTitle"> Fail App </h1>
            <h3 className="jumboSubTitle">Fail now so you can succeed later!</h3>
          </div>
        </div>
        <div>
          <FailBox className="failBoxColor"/>
        </div>
      </div>
    )
  }
});

module.exports = Home;