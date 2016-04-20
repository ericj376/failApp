/*
Index
  Fail Box
    Fail List Data
      Fail List
        Fail Card
      Single Fail Card Data
        Single Fail Card
          Comment List
            Comment Form Data
              Comment Form
            Comment Card
            Edit Comment Card Data
              Edit Comment Card
    Edit Fail Card Data
      Edit Fail Card Form
    Fail Form Data
      Fail Form
*/


var React = require('react');
var FailList = require('./FailList');
var SingleFailCardData = require('./SingleFailCardData');


var FailListData = React.createClass({
	getInitialState: function() {
		return {
			allFails: null
		}
	},
  contextTypes: {
    sendNotification: React.PropTypes.func.isRequired
  },
	loadAllFailsFromServer: function() {  
		var self = this;
		$.ajax({
			url: '/api/fail',
			method: 'GET'
		}).done(function(data){
		  self.setState({ allFails: data });
	  })
	},
  deleteSingleFail: function(id){
    var self = this;
    if (confirm('Wanna delete?') ) {
      $.ajax({
        url: '/api/fail/' + id,
        method: 'DELETE'
      }).done(function(){
        self.loadAllFailsFromServer();
        self.context.sendNotification("Deleted fail yo!!");
      })
    }
  },
	componentDidMount: function() {
		this.loadAllFailsFromServer();
	},
	render: function() {
    console.log("trying to render", this.state.allFails);
    var renderingStuff = null; 
    if (this.state.allFails && !this.props.activeFailId) {
      console.log("another Console.log in the render", this.state.allFails);
      renderingStuff = (
          <FailList failArray={this.state.allFails} getId={ this.props.getId } deleteSingleFail={this.deleteSingleFail} />
        )
    } else if ( this.props.activeFailId ) {
      console.log('maybe we got here? maybe we didnt?');
      renderingStuff = (
          <SingleFailCardData id={ this.props.activeFailId } />
        )
    } 
		return renderingStuff;
	}
});

module.exports = FailListData;

