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

function EditFailCardForm(props) {
  var categoryList = props.categories.map(cat => (
    <option value={ cat._id }>{ cat.name}</option>
    ));
  return(
    <div className="container myContainer">
     <form onSubmit={ props.handleFailEditSubmit }>
       <h3> Edit Fail </h3>
       <fieldset className="form-group">
         <label>title</label>
         <input onChange={props.onTitleChange} value={props.title} type="text" className="form-control"/>
       </fieldset>
       <fieldset className="form-group">
         <label>challenge</label>
         <input onChange={props.onChallengeChange} value={props.challenge}  type="text" className="form-control"/>
       </fieldset>
       <fieldset className="form-group">
         <label>image</label>
         <input onChange={props.onImgChange} value={props.img} type="text" className="form-control"/>
       </fieldset>
       <fieldset className="form-group">
         <label>rating</label>
         <input onChange={ props.onRatingChange } value={ props.rating }  className="form-control"/>
       </fieldset>
       <fieldset className="form-group">
         <label htmlFor="exampleSelect1">categories</label>
          <select onChange={ props.onCategoryChange } value={ props.category }  className="form-control">
             <option>Please Choose</option>
             {categoryList}
          </select>
       </fieldset>
       <button className="btn btn-success-outline" type="submit"> Submit </button>
     </form>
     </div>
    )
};

module.exports = EditFailCardForm;