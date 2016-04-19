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

function FailCard(props) {
  var categoryName = props.category ? props.category.name : "no category";
	return(
		<div className="card card-size">
			<div className="card-body"><img className="fail-img" src={props.img}/>
				<div className="card-body card-flex">
  				<div className="buttonPosition">	
            <div>
              <button onClick={props.getId.bind(null, 'showOne', props.id)} className="btnSpace btn btn-primary"> View More </button>
  					</div>
            <div>
              <button onClick={props.getId.bind(null, 'editOne', props.id)} className="btnSpace btn btn-primary"> Edit </button>
            </div>
            <div> 
              <button onClick={props.deleteSingleFail.bind(null, props.id)} className="btnSpace btn btn-primary"> Delete </button>
            </div>
          </div>
          <div className="titlePosition">
            <p>{props.title}</p>
          </div>
          <div className="categoryPosition">
            <p>Category: {categoryName}</p>
          </div>
          <div className="textPosition">
            <p>{props.challenge}</p>
            
            <p>{props.rating}</p>
				  </div>
        </div>
			</div>
		</div>
		)
};

module.exports = FailCard;