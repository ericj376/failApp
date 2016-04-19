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
var FailList = require('./FailList');

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
		return this.state.allFails ? <FailList failArray={this.state.allFails} getId={ this.props.getId } deleteSingleFail={this.deleteSingleFail} /> : null;
	}
});

module.exports = FailListData;

