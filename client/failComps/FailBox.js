/*
Index
  Fail Box
    Fail List Data
      Fail List
        Fail Card
    Edit Fail Card Data
      Edit Fail Card Form
    Fail Form Data
      Fail Form
    Single Fail Card Data
      Single Fail Card
        Comment Form Data
          Comment Form
        Comment List
          Comment Card
*/


var React = require('react');
var Toggler = require('../toggler');
var FailListData = require('./FailListData');
var FailFormData = require('./FailFormData');
var SingleFailCardData = require('./SingleFailCardData');
var EditFailCardData = require('./EditFailCardData');

var FailBox = React.createClass ({
  getInitialState: function() {
  console.log('trying to get initialSTate from FailBox')
    return{
      activeComponent: 'fail',
      activeFailId: null,
    }
    console.log(activeFailId);
  },
  getId: function(type, id){
    console.log(type, id);
    if(type === 'showOne'){
      return this.setState({ activeFailId: id, activeComponent: 'oneFail' })
      console.log(activeFailId, 'this is getId from FailBox');
    } else if (type === 'editOne'){
      return this.setState({ activeFailId : id, activeComponent: 'editFail' })
    } else {
      return null
    }
  },

  showComp: function(){
    if(this.state.activeComponent === 'fail'){
      console.log('show component all fails')
      return <FailListData getId={ this.getId }/>
      console.log(getId)

    } else if (this.state.activeComponent === 'form'){
      return <FailFormData toggleActiveComp={ this.toggleActiveComp } />

    } else if (this.state.activeComponent === 'oneFail'){
      return <SingleFailCardData id={this.state.activeFailId} />
      console.log(id, 'this is show comp from FailBox')

    } else if (this.state.activeComponent === 'editFail') {
      console.log('show comp edit blog')
      return <EditFailCardData id={ this.state.activeFailId } toggleActiveComp={ this.toggleActiveComp } />

    } else {
      throw new Error("Invalid activeComponent", this.state.activeComponent)
    }
  },
  componentDidMount: function(){
    console.log("i'm loading")
  },
  toggleActiveComp: function(name){
    this.setState({activeComponent: name})
  },
  render: function() {
    console.log("INSIDE FAIL BOX")
    return(
      <div className="container">
        <Toggler toggleActiveComp={ this.toggleActiveComp }/>
        { this.showComp()}
      </div>
    )
  },
});

module.exports = FailBox;

