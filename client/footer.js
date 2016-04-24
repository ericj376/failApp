var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <div className="row col-md-12">
        <nav className="footerColor navbar navbar-fixed-bottom navbar-light bg-faded">
          <a className="failAppText navbar-brand" href="#">fail app  |</a>
          <p className="contactText">contact: info@failapp.com   |</p>
          <p className="copyrightText">copyright 2016</p>
        </nav>
      </div>
    )
  }
});

module.exports = Footer;