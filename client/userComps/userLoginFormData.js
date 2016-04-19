/*
  Index
    UserApp
      UserLoginFormData
        UserLoginForm
    UserAuth
*/

var React = require('react');

var UserLoginForm = require('./userLoginForm');


var UserLoginFormData = React.createClass({
    getInitialState: function() {
      return {
            email        : null,
            password     : null,
            username     : null,
            phone        : null,
            image        : null,
            categories   : [],
      }
    },
    contextTypes: {
        sendNotification: React.PropTypes.func.isRequired,
        logIn: React.PropTypes.func.isRequired,
        signUp: React.PropTypes.func.isRequired
    },
    onEmailChange: function(event) {
      this.setState({ email: event.target.value })
    },
    onPasswordChange: function(event) {
      this.setState({ password: event.target.value })
    },
    onUserNameChange: function(event) {
        this.setState({ username: event.target.value })
    },
    onPhoneChange: function(event) {
      this.setState({ phone: event.target.value })
    },
    onImageChange: function(event) {
      this.setState({ image: event.target.value })
    },
    onCategoryChange: function(event) {
        this.setState({ category: event.target.value })
    },

    loadAllCategoriesFromServer: function() {
        var self = this;
        $.ajax({
            url: '/api/categories',
            method: 'GET'
        }).done(function(data){
            self.setState({ categories: data})
        })
    },
    componentDidMount: function(){
        this.loadAllCategoriesFromServer();
    },

    submitUserToServer: function(e) {
        const {setActiveComponent} = this.props
        const {email, password, username, phone, image, category} = this.state;
        const {logIn, signUp} = this.context;

      e.preventDefault();
        
        const promise = this.props.login ? logIn(email, password) : signUp(email, password, username, phone, image, category);
        promise.done(() => setActiveComponent('home'));
    },
    render: function() {
        return (
          <UserLoginForm 
                login = {this.props.login}
                onUserNameChange = { this.onUserNameChange }
                submitUserToServer = { this.submitUserToServer }
                onEmailChange = { this.onEmailChange }
                onPasswordChange = { this.onPasswordChange }
                onPhoneChange = { this.onPhoneChange }
                onImageChange = { this.onImageChange }
                onCategoryChange = { this.onCategoryChange } 
                categories = { this.state.categories } />
        )
    }

});

module.exports = UserLoginFormData;