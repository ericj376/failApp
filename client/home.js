var React = require('react');
var FailBox = require('./FailComps/FailBox');

var Home = React.createClass({
  render: function() {
    return(
      <div className="failBoxColor">
        <div>
          <div className="jumbotron jumbotronStyle">
              <video autoPlay muted loop="true" className="embed-responsive-item home-video"
                src="http://machmissoula.org/wp-content/uploads/2016/04/failMovieOne.mp4" 
                type="video/mp4"></video>         
            <div className="text-box">
              FAILAPP Failing is a part of success.
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