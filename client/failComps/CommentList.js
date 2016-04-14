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
  handleCommentDelete: function() {
    var self = this;
    
  }

  render: function(){

    console.log("this is supposedly not an array", this.props.commentsArray);

      var comments = this.props.commentsArray.map(function(c){
      var user = c.user && c.user.local ? c.user.local.username : "no user";

      var b = c.body ? c.body : null
      return <CommentCard body={b} date={c.date.substr(0,10)} username={user}/>
    });

    return(
      <div>
        { comments }
      </div>
      )
  }
});

module.exports = CommentList;