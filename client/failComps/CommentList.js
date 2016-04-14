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
var CommentCard = require('./commentCard');

var CommentList = React.createClass({
  render: function(){
    var comments = this.props.commentsArray.map(function(c){
      var b = c.body ? c.body : null
      return <CommentCard body={b} date={c.date.substr(0,10)} username={c.user.local.username}/>
    });
    console.log(comments, "i am comment list");

    return(
      <div>
        { comments }
      </div>
      )
  }
});

module.exports = CommentList;