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

function FailCard(props) {
  var categoryName = props.category ? props.category.name : "no category";
  var ratingsFail = props.ratings ? props.ratings.ratingScale : "no rating";
	return(
		<div className="card card-size">
      <div className="card-flex">
        <div className="card-body"><img className="fail-img" src={props.img}/>
          <div className="categoryBox">
            <p className="categoryText">{categoryName}</p>
          </div>
          <i onClick={props.getId.bind(null, 'showOne', props.id)} className="fa fa-lg fa-binoculars viewSpace" aria-hidden="true"></i>
          <i onClick={props.getId.bind(null, 'editOne', props.id)} className="fa fa-lg fa-pencil editSpace" aria-hidden="true"></i>
          <i onClick={props.deleteSingleFail.bind(null, props.id)} className="fa fa-lg fa-trash deleteSpace" aria-hidden="true"></i>
          <div className="container opacityBox">
          </div>
          <div className="ratingBox-flex">
            <Rating readonly={true} initialRate={props.average}/>
          </div>
          <p id="titlePosition">{props.title}</p>          
          <p id="challengePosition">{props.challenge}</p>        
        </div>
			</div>
		</div>
	)
};

module.exports = FailCard;