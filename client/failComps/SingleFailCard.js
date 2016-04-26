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
var CommentList = require('./CommentList');
var Rating = require('react-rating');


var SingleFailCard = React.createClass({

  render: function(){

    var user = this.props.user ? this.props.user.local.email : null;
    var categoryName = this.props.oneFail.category ? this.props.oneFail.category.name : "no category";
     
    return(
      <div className="jumbotron jumbotron-fluid SFCcontainer">
        <div className="container singleFailCard">
          <button onClick={this.props.toggleActiveComp.bind(null, 'fail')} className="fa fa-undo fa-lg goBackButton pull-right fa-stack" aria-hidden="true"></button>
          <p className="SFCtitlePosition">{this.props.oneFail.title}</p>
          <img className="SFCimgPosition" src={this.props.oneFail.img}/>
          <p className="SFCchallengePosition">{this.props.oneFail.challenge}</p>
          <div className="SFCrating">
            <Rating readonly={true} initialRate={this.props.average}/>
          </div>

          <p className="SFCcategory">{categoryName}</p>    
          <div className="SFCcomments">
            <CommentList loadOneFailFromServer={ this.props.loadOneFailFromServer } failId={ this.props.oneFail._id } commentsArray={this.props.oneFail.comments} deleteComment={ this.props.deleteComment } getId={this.props.getId}/>
          </div>
        </div>
      </div>
    )
  }
});



module.exports = SingleFailCard;