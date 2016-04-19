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
var SingleFailCard = require('./SingleFailCard');



var SingleFailCardData = React.createClass({
  getInitialState: function(){
    return{
      oneFail: null,
      allComments: null,
      ratingAverage: null,
    }
  },

  deleteComment: function(id){
    var self = this;
    $.ajax({
      url: '/api/fail/' + this.props.id + '/comment/' + id,
      method: 'DELETE'
    }).done(function(){
      alert('comment deleted');
      self.loadOneFailFromServer();
    })
  },
    
  loadOneFailFromServer: function(){
    var self = this;
    const ajaxProps = {
      url: '/api/fail/' + this.props.id,
      method: 'GET',
    };
    $.ajax(ajaxProps).done(function(data){
      self.setState({oneFail: data})
      self.getAverage(data.ratings)
    })
  },
  getAverage: function(rate){
    var total = 0;
    
    for(var i = 0; i < rate.length; i++) {
      total += rate[i];
    }
      var average = total / rate.length;
    console.log(average, "trying to get the avg in getAverage");
    return average;
  },
  componentDidMount: function(){
    this.loadOneFailFromServer();
  },
  render: function(){
    return this.state.oneFail ? <SingleFailCard loadOneFailFromServer={ this.loadOneFailFromServer } oneFail={ this.state.oneFail } id={ this.props.id } deleteComment={ this.deleteComment } average={ this.state.ratingAverage } /> : null;
  }

});

module.exports = SingleFailCardData;