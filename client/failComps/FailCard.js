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
		<div className="panel-default">
			<div className="panel-body"><img className="fail-img" src={props.img}/>
				<div className="panel-body">
					<p>{props.title}</p>
					<p>{props.challenge}</p>
					<p>{categoryName}</p>
					<p>{props.rating}</p>
					<button onClick={props.getId.bind(null, 'showOne', props.id)} className="btn btn-primary"> View More </button>
					<button onClick={props.getId.bind(null, 'editOne', props.id)} className="btn btn-primary"> Edit </button>
          <button onClick={props.deleteSingleFail.bind(null, props.id)} className="btn btn-primary"> Delete </button>
				</div>
			</div>
		</div>
		)
};

module.exports = FailCard;