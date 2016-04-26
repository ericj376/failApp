var React = require('react');
var FailBox = require('./FailComps/FailBox');

var Home = React.createClass({
  render: function() {
    return(
      <div className="failBoxColor">
        <div>
          <div className="jumbotron jumbotronStyle">
            <div>
              <iframe className="embed-responsive-item home-video" src="https://a0.muscache.com/airbnb/static/P1-background-vid-compressed.mp4" ></iframe>
            </div>
            
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