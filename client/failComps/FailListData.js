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
	loadAllFailsFromServer: function() {
		var self = this;
		$.ajax({
			url: '/api/fail',
			method: 'GET'
		}).done(function(data){
		self.setState({ allFails: data });
	})
	},
	componentDidMount: function() {
		this.loadAllFailsFromServer()
	},
	render: function() {
		return this.state.allFails ? <FailList failArray={this.state.allFails} getId={ this.props.getId } /> : null;
	}
});

module.exports = FailListData;

