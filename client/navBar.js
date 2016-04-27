var React = require('react');

var links = ['home', 'my page', 'why fail?']

var LogIn = React.createClass({
    
    render: function() {
      var self = this;
      return (
        <div>
          <li className="nav-item pull-xs-right">
            <button onClick= { self.props.setActiveComponent.bind(null,'signUp' )} className="btn signUpStyle" type="submit">sign up</button>
          </li>
          <li className="nav-item pull-xs-right">
            <button onClick= { self.props.setActiveComponent.bind(null,'login' )} className="btn signUpStyle" type="submit">login</button>
          </li>
        </div>
      )
    }
});

var LogOut = React.createClass({     
    contextTypes: {
        logOut: React.PropTypes.func.isRequired
    },
    render: function() {
      var self = this;
      return (  
        <div>
          <li className="nav-item pull-xs-right signUpStyle">
            <button onClick= {self.context.logOut} className="nav-link btn" type="submit">log out</button> 
          </li>
          <li className="nav-item pull-xs-right signUpStyle"> 
            <p className="nav-link"> Logged in as: {self.props.userDisplay}</p>
          </li>
        </div>
      )
    }
});


var NavBar = React.createClass({
   contextTypes: {
        user: React.PropTypes.object
    },
    render: function() {
      var self = this;
      
      var logButtons;
      var user = self.context.user;
      var userDisplay = null;
      if (user == null) {
        logButtons = <LogIn setActiveComponent= { self.props.setActiveComponent } />;
      } else {
        userDisplay = user.local.username;
       
        logButtons = <LogOut setActiveComponent= { self.props.setActiveComponent } userDisplay={userDisplay} />;
      };

      var currentComponent = self.props.getActiveComponent;
      var linkList =
        links.filter(function(l){return !(user === null && l === 'my page')}).map(function(aLink) {
          if(currentComponent() === aLink) {
            return (
              <li className="nav-item active" key={aLink}>
                <a className="nav-link" 
                onClick={ self.props.setActiveComponent.bind(null, aLink)}>{ aLink } <span className="sr-only">(current)</span></a>
              </li>
              )
          } else {
            return (
              <li className="nav-item" key={aLink}>
                <a className="nav-link" 
                onClick={ self.props.setActiveComponent.bind(null, aLink)}>{ aLink }</a>
              </li>
            )
          }
        });
      return (
        <nav className="navbar navbar-light bg-faded">
          <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
            &#9776;
          </button>
          <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
            <a className="navbar-brand" href="#"></a>
              <ul className="nav navbar-nav">
                { linkList }
                { logButtons }
              </ul>
          </div>
        </nav>
      )
    }

});

module.exports = NavBar;