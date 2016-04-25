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
var React =require('react');

var CommentCard = React.createClass({

  render: function(){
      window.u = this.props.userLocal;
      /*
      admin edit delete not working correctly
      */

    if(this.props.userLocal.role == "admin" || this.props.userLocal._id === this.props.userId){

      var deleteComment = <button onClick={this.props.deleteComment.bind(null,  this.props.id)} type="button" className="btn btn-warning">Delete Comment</button>
    } else {
      var deleteComment = null;
    };

    if(this.props.userLocal.role == "admin" || this.props.userLocal._id === this.props.userId){

      var editComment = <button onClick={this.props.getId.bind(null, 'editOneComment', this.props.id)} type="button" className="btn btn-warning">Edit Comment</button>
    } else {
      var editComment = null;
    };
    return(
      <div>
        <p>{this.props.body}</p>
        <p>{this.props.date}</p>
        <p>{this.props.username}</p>
        <div>
          {deleteComment}
          {editComment}
        </div>
      </div>
    )
  }
});

module.exports = CommentCard;
