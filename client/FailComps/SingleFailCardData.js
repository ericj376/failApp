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
var SingleFailCard = require('./SingleFailCard');


var SingleFailCardData = React.createClass({
  getInitialState: function(){
    return{
      oneFail: null,
      allComments: null,
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
      self.setState({
        oneFail: data,
        ratingAverage: self.props.getAverage(data.ratings)
      })
    })
  },
  componentDidMount: function(){
    this.loadOneFailFromServer();
  },
  render: function(){
    return this.state.oneFail ? <SingleFailCard loadOneFailFromServer={ this.loadOneFailFromServer } oneFail={ this.state.oneFail } id={ this.props.id } deleteComment={ this.deleteComment } average={ this.state.ratingAverage } /> : null;
  }
});

module.exports = SingleFailCardData;