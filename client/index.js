var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./navbar');
var Notifier = require('./notifier');
var UserApp = require('./userApp');
var UserAuth = require('./userAuth');
var Home = require('./home');
var Footer = require('./footer');
var WhyFail = require('./whyFail');
var MyPage = require('./myPage');




var App = React.createClass({
  getInitialState: function() {
    return {
      activeComponent: 'home'
    }
  },
  setActiveComponent: function(componentName) {
    this.setState({
      activeComponent: componentName
    })
  },

  getActiveComponent: function() {
    return this.state.activeComponent;
  },

  showWhichComponent: function() {
   switch(this.state.activeComponent) {
    case 'home':
        return <Home />
        break;
    case 'my page':
        return <MyPage />
        break;

    case 'why fail?':
        return <WhyFail />
        break;
    case 'login':
        return <UserApp login={ true } setActiveComponent={this.setActiveComponent} />
        break;
    case 'signUp':
        return <UserApp login={ false } setActiveComponent={this.setActiveComponent} />
        break;
    default:
       return <Home />
    }
  },
  render: function() {
    console.log("inside index")
    return (
      <div>
        <Notifier>
          <UserAuth>  
            <div>
              <NavBar setActiveComponent={ this.setActiveComponent } getActiveComponent= { this.getActiveComponent } />
              {this.showWhichComponent()}
            </div>
            <Footer />
          </UserAuth> 
        </Notifier> 
      </div>
      )
  }
})

ReactDOM.render(
  <App />, document.getElementById('app')
);