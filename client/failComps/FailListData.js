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
		console.log(data, "this is Fail List Data");
	})
	},
	componentDidMount: function() {
		console.log("trying to mount Fail List Data");
		this.loadAllFailsFromServer()
	},
	render: function() {
		return this.state.allFails ? <FailList failArray={this.state.allFails} getId={ this.props.getId } /> : null;
	}
});

module.exports = FailListData;

