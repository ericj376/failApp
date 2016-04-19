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

var React = require('react');
var CommentList = require('./CommentList');


var SingleFailCard = React.createClass({
  
  render: function(){

    var user = this.props.user ? this.props.user.local.email : null;
    var categoryName = this.props.oneFail.category ? this.props.oneFail.category.name : "no category";
    return(
      <div>
        <div className="singlefailpost">
          <p>{this.props.oneFail.title}</p>
          <img src={this.props.oneFail.img}/>
          <p>{this.props.oneFail.challenge}</p>
          <p>{this.props.oneFail.ratings}</p>
          <p>{categoryName}</p>    
          <CommentList loadOneFailFromServer={ this.props.loadOneFailFromServer } failId={ this.props.oneFail._id } commentsArray={this.props.oneFail.comments} deleteComment={ this.props.deleteComment } getId={this.props.getId}/>
        </div>
      </div>
    )
  }
});

module.exports = SingleFailCard;