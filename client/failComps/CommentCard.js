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
var React =require('react');

var CommentCard = React.createClass({
  render: function(){
    return(
      <div>
        <p>{this.props.body}</p>
        <p>{this.props.date}</p>
        <p>{this.props.username}</p>
        <button onClick={this.props.deleteComment.bind(null,  this.props.id)} type="button" className="btn btn-warning">Delete Comment</button>
        <button onClick={this.props.getId.bind(null, 'editOneComment', this.props.id)} type="button" className="btn btn-warning">Edit Comment</button>
      </div>
        )
  }
});

module.exports = CommentCard;