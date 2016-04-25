/*
  Index
    UserApp
      UserLoginFormData
        UserLoginForm
    UserAuth
*/

var React = require('react');

var UserAuth = React.createClass({
    getInitialState: function() {
      return {
        user: null,
      }
    },
    
    propTypes: {
      children: React.PropTypes.node.isRequired
    },
    
    childContextTypes: {
      user: React.PropTypes.object,
      signUp: React.PropTypes.func,
      logIn: React.PropTypes.func,
      logOut: React.PropTypes.func
    },

    contextTypes:{
      sendNotification: React.PropTypes.func.isRequired
    },
    
    getChildContext: function() {
      return {
          user: this.state.user,
          signUp: this.signUp,
          logIn: this.logIn,
          logOut: this.logOut
        }
    },

    signUp: function(email, password, username, phone, image, category) {
      const userData = {
        email: email,
        password: password,
        username: username,
        phone: phone,
        image: image,
        category: category
      };
      const self = this;
      console.log("this is category", userData);
      return $.ajax({
        url: '/signup',
        method: 'POST',
        data: userData
      }).done( function(data) {
        self.setState({user: data.user});
        self.context.sendNotification('you signed up');
      }).fail(function(data) {
        self.context.sendNotification('sign up failed: ' + data.responseText);
      });
    },

    logIn: function(email, password) {
      const userData = {
        email: email.trim(),
        password: password.trim()
      };

      const self = this;
      return $.ajax({
        url: '/login',
        method: 'POST',
        data: userData
      }).done( function(data) {
        self.setState({user: data.user});
        self.context.sendNotification('you logged in');
      }).fail(function(data) {
        self.context.sendNotification('logged in failed: ' + data.responseText);
      });
    },

    logOut: function(email, password) {

      const self = this;
      return $.ajax({
        url: '/logout',
        method: 'GET',
      }).done( function() {
        self.setState({user: null});
        self.context.sendNotification('you logged out');
        window.location = '/';
      }).fail(function() {
        self.context.sendNotification('logged out failed');
      });
    },
    
    
    render: function() {
        return ( 
          <div>
            {this.props.children}
          </div>
        )
    }

});

module.exports = UserAuth;