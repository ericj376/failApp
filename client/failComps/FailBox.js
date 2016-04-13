var React = require('react');
var Toggler = require('../toggler');
var FailListData = require('./FailListData');
var FailFormData = require('./FailFormData');

var FailBox = React.createClass ({
  getInitialState: function() {
    return{
      activeComponent: 'fail',
      activeFailId: null,
    }
  },
  getId: function(type, id){
    if(type === 'showOne'){
      return this.setState({ activeFailId: id, activeComponent: 'showOne' })
    } else if (type === 'editOne'){
      return this.setState({ activeFailId : id, activeComponent: 'editFail' })
    } else {
      return null
    }
  },

  showComp: function(){
    if(this.state.activeComponent === 'fail'){
      console.log('show com all fails')
      return <FailListData getId={ this.getId }/>
    } else if (this.state.activeComponent === 'form'){
      return <FailFormData toggleActiveComp={ this.toggleActiveComp } />
    } else {
      throw new Error("Invalid activeComponent", this.state.activeComponent)
    }
  },
  toggleActiveComp: function(name){
    this.setState({activeComponent: name})
  },
  render: function() {
    return(
      <div className="container">
        <Toggler toggleActiveComp={ this.toggleActiveComp }/>
        { this.showComp }
      </div>
    )
  },
});

module.exports = FailBox;

