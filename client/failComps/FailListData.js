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
			method: 'GET',
		}).done(data => this.setState({ allFails: data }));
	},
	componentDidMount: function() {
		this.loadAllFailsFromServer();
	},
	render: function() {
		return this.state.allFails ? <FailList failArray={this.state.allFails} getId={ this.props.getId } /> : null;
	}
});

module.exports = FailListData;

