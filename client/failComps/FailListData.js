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
      console.log("trying to fin data", data);
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
  getAverage: function(rate){
   
    var average = rate.length === 0 ? 0 : rate.reduce((prev, cur) => prev + cur.ratingScale, 0) / rate.length;

    console.log(rate, average, "trying to find rate and average in getAverage"); 
    
    return average;
  },
	render: function() {
    console.log("trying to render", this.state.allFails);
    var renderingStuff = null; 
    if (this.state.allFails && !this.props.onlyOne) {
      console.log("another Console.log in the render", this.state.allFails);
      renderingStuff = (
          <FailList failArray={this.state.allFails} getId={ this.props.getId } deleteSingleFail={this.deleteSingleFail} getAverage={this.getAverage} />
      )
    } else if ( this.props.onlyOne ) {
      console.log('maybe we got here? maybe we didnt?');
      renderingStuff = (
          <SingleFailCardData getAverage={this.getAverage} id={ this.props.activeFailId } />
      )
    } 
		return renderingStuff;
	}
});

module.exports = FailListData;

