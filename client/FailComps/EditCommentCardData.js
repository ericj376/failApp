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
var EditCommentCard = require('./EditCommentCard');

var EditCommentCardData = React.createClass({
  getInitialState: function(){
    return{
      body: null,
    }
  },
  loadOneCommentFromServer: function(){
    console.log("loading a comment");
    var self = this;
    $.ajax({
      url: '/api/fail/' + this.props.failId + '/comment/' + this.props.id,
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
  updateCommentCard: function(comment){
    console.log('trying to submit comment', comment);
    $.ajax({
      url: '/api/fail/' + this.props.failId + '/comment/' + this.props.id,
      dataType: 'json',
      type: 'PUT',
      data: comment,
      success: function(data){
        console.log('calling success', data);
        this.props.loadOneFailFromServer();
        this.props.toggleActiveComp('commentCard');
      }.bind(this),
      error: function(xhr, status, err){
        console.error(status, err.toString());
      }.bind(this)
    });
  },
  onBodyChange: function(event){
    this.setState({body: event.target.value})
  },
  handleCommentCardEditSubmit: function(event){
    console.log("this is handleCommentCardEditSubmit!!!!")
    event.preventDefault();

      var body = this.state.body;
      console.log(body, 'this is EDIT COMMENT CARD DATA');

      this.updateCommentCard({body: body});
      this.setState({body: ''})
  },
  render: function(){
    return(
      <EditCommentCard handleCommentCardEditSubmit={this.handleCommentCardEditSubmit} onBodyChange={this.onBodyChange} body={this.state.body}/>
    )
  }
});

module.exports = EditCommentCardData;


