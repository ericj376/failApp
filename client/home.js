var React = require('react');
var FailBox = require('./FailComps/FailBox');

var Home = React.createClass({
  render: function() {
    return(
      <div>
        <FailBox />
      </div>
      )

  }
});

module.exports = Home;