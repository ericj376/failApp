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
var CommentForm = require('./commentForm');

var CommentFormData = React.createClass({
  getInitialState: function(){
    return{
      body: null,
    }
  },

  handleSubmit: function(event){
    event.preventDefault();

    var data = {
      body: this.state.body
    };

    var self = this;
    console.log('i submit comment to server', data.body);

    $.ajax({
      url: '/api/fail/' + this.props.id + '/comment',
      method: 'POST',
      data: data,
      success: function(data){
        console.log(data, 'this is comment data');
        self.props.loadOneFailFromServer();
      }.bind(this)
    });

    self.setState({ body:''});
  },
  onBodyChange: function(event){
    this.setState({ body: event.target.value });
  },

  render: function(){
    return(
      <CommentForm handleSubmit={ this.handleSubmit } onBodyChange={ this.onBodyChange } />
      )
  }
});

module.exports = CommentFormData;