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
var EditCommentCard = require('./EditCommentCard');

var EditCommentCardData = React.createClass({
  getInitialState: function(){
    return{
      body: null,
    }
  },
  
  loadOneCommentFromServer: function(){
    var self = this;
    $.ajax({
      url: '/api/fail/' + this.props.id + '/comment/' + id,
      method: 'GET',
    }).done(function(data){
      self.setState({
        body: data.body,
      })
    })
  },
  componentDidMount: function(){
    this.loadOneCommentFromServer();
  },
 
  render: function(){
    return(
      <EditCommentCard/>
      )
  }
});

module.exports = EditCommentCardData;


