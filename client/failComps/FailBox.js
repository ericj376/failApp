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
        Comment List
          Comment Form Data
            Comment Form
          Comment Card
          Edit Comment Card Data
            Edit Comment Card
*/


var React = require('react');
var Toggler = require('../toggler');
var FailListData = require('./FailListData');
var FailFormData = require('./FailFormData');
var SingleFailCardData = require('./SingleFailCardData');
var EditFailCardData = require('./EditFailCardData');

var FailBox = React.createClass ({
  getInitialState: function() {
    return{
      activeComponent: 'fail',
      activeFailId: null,
      categories: [],
    }
  
  },
  getId: function(type, id){
    if(type === 'showOne'){
      return this.setState({ activeFailId: id, activeComponent: 'oneFail' })
    } else if (type === 'editOne'){
      return this.setState({ activeFailId : id, activeComponent: 'editFail' })
    } else {
      return null
    }
  },

  showComp: function(){
    if(this.state.activeComponent === 'fail'){
      return <FailListData getId={ this.getId } />

    } else if (this.state.activeComponent === 'form'){
      return <FailFormData toggleActiveComp={ this.toggleActiveComp } categories={ this.state.categories } />

    } else if (this.state.activeComponent === 'oneFail'){
      return <SingleFailCardData id={ this.state.activeFailId }  />

    } else if (this.state.activeComponent === 'editFail') {
      return <EditFailCardData id={ this.state.activeFailId } toggleActiveComp={ this.toggleActiveComp } />

    } else {
      throw new Error("Invalid activeComponent", this.state.activeComponent)
    }
  },
  componentDidMount: function(){
    this.loadAllCategoriesFromServer();
  },
  loadAllCategoriesFromServer: function() {
    console.log("loading fail categories");
    var self = this;
    $.ajax({
      url: '/api/categories',
      method: 'GET'
    }).done(function(data){
    self.setState({ categories: data });
  })
  },
  toggleActiveComp: function(name){
    this.setState({activeComponent: name})
  },
  render: function() {
    return(
      <div className="container">
        <Toggler toggleActiveComp={ this.toggleActiveComp }/>
        { this.showComp()}
      </div>
    )
  },
});

module.exports = FailBox;

