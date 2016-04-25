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
var Rating = require('react-rating');

var FailCard = React.createClass ({
    render: function(){
      var categoryName = this.props.category ? this.props.category.name : "no category";
      var ratingsFail = this.props.ratings ? this.props.ratings.ratingScale : "no rating";

      if(this.props.user.local && this.props.user.local.role === 'admin'){
        var editButton = <i onClick={this.props.getId.bind(null, 'editOne', this.props.id)} className="fa fa-lg fa-pencil editSpace" aria-hidden="true"></i>
      } else {
        var editButton = null;
      };

      if(this.props.user.local && this.props.user.local.role === 'admin'){
        var deleteButton = <i onClick={this.props.deleteSingleFail.bind(null, this.props.id)} className="fa fa-lg fa-trash deleteSpace" aria-hidden="true"></i>
      } else {
        var deleteButton = null;
      };

      return(
        <div className="card card-size">
          <div className="card-flex">
            <div className="card-body"><img className="fail-img" src={this.props.img}/>
              <div className="categoryBox">
                <p className="categoryText">{categoryName}</p>
              </div>
              <i onClick={this.props.getId.bind(null, 'showOne', this.props.id)} className="fa fa-lg fa-binoculars viewSpace" aria-hidden="true"></i>
              <div>
                { editButton }
                { deleteButton }
              </div>
              <div className="container opacityBox">
              </div>
              <div className="ratingBox-flex">
                <Rating readonly={true} initialRate={this.props.average}/>
              </div>
              <p id="titlePosition">{this.props.title}</p>          
              <p id="challengePosition">{this.props.challenge}</p>        
            </div>
          </div>
        </div>
      )
    }
});


module.exports = FailCard;
