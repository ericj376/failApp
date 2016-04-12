var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-fixed-bottom navbar-light bg-faded">
          <a className="navbar-brand" href="#">Fixed bottom</a>
        </nav>
      </div>
    )
  }
});

module.exports = Footer;