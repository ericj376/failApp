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

    $.ajax({
      url: '/api/fail/' + this.props.id + '/comment',
      method: 'POST',
      data: data,
      success: function(data){
        self.props.loadOneFailFromServer();
        self.setState({ body: ''});
      }.bind(this)
    })
  },
  onBodyChange: function(event){
    this.setState({ body: event.target.value });
  },

  render: function(){
    return(
      <CommentForm handleSubmit={ this.handleSubmit } onBodyChange={ this.onBodyChange } body={this.state.body}/>
      )
  }
});

module.exports = CommentFormData;

/*handleComment: function (e){
    e.preventDefault();
    var body = this.state.body.trim();
    console.log(body, 'this is the comment');
    if(!body){
      return;
    }
    this.props.handleCommentFormSubmit({ body: body }, this.props.id );
    this.setState({body: ''});
  },*/