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
var CommentList = require('./CommentList');
var CommentFormData = require('./CommentFormData');

var SingleFailCard = React.createClass({
  render: function(){
    console.log(this.props.oneFail, "this is SingleFailCard");


    return(
    <div>
      <div className="singlefailpost">
        <p>{this.props.oneFail.title}</p>
        <img src={this.props.oneFail.img}/>
        <p>{this.props.oneFail.challenge}</p>
        <p>{this.props.oneFail.ratings}</p>    
        <CommentList commentsArray={this.props.oneFail.comments}/>
        <CommentFormData loadOneFailFromServer={ this.props.loadOneFailFromServer } id={ this.props.oneFail._id } />
      </div>
    </div>
    )
  }
});

module.exports = SingleFailCard;