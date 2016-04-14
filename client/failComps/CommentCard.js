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
var React =require('react');

var CommentCard = React.createClass({
  render: function(){
    console.log('Data in Card', this.props.body, this.props.date, this.props.username );
    return(
      <div>
        <p>{this.props.body}</p>
        <p>{this.props.date}</p>
        <p>{this.props.username}</p>
      </div>
        )
  }
});

module.exports = CommentCard;