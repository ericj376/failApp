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


function FailForm(props){
  return(
<div className="container myContainer spacer">
     <form onSubmit={ props.submitFailToServer }>
       <h3> Post New Fail </h3>
       <fieldset className="form-group">
         <label>Title</label>
         <input onChange={props.onTitleChange} value={props.title} type="text" className="form-control"/>
       </fieldset>
       <fieldset className="form-group">
         <label>Image</label>
         <input onChange={props.onImgChange} value={props.img}  type="text" className="form-control"/>
       </fieldset>
       <fieldset className="form-group">
         <label>Challenge</label>
         <input onChange={props.onChallengeChange} value={props.challenge} type="text" className="form-control"/>
       </fieldset>
       <fieldset className="form-group">
         <label>Rating</label>
         <input onChange={props.onRatingChange} value={props.rating}  type="text" className="form-control"/>
       </fieldset>
       <fieldset className="form-group">
         <label>Category</label>
         <input onChange={props.onCategoryChange} value={props.category}  type="text" className="form-control"/>
       </fieldset>
       <button className="btn btn-success-outline" type="submit"> Submit </button>
     </form>
   </div>
  )
};

module.exports = FailForm;