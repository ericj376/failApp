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

function FailForm(props){
  var categoryList = props.categories.map(cat => (
    <option value={ cat._id }>{ cat.name }</option>
  ));
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
        <textarea onChange={props.onChallengeChange} value={props.challenge} rows="3" type="text" className="form-control" />
      </fieldset>       
      <fieldset className="form-group">
        <label htmlFor="exampleSelect1">Categories</label>
        <select onChange={props.onCategoryChange} className="form-control">
          <option>Please Choose</option>
          {categoryList}
        </select>
      </fieldset>
      <button className="btn loginButton" type="submit"> Submit </button>
    </form>
  </div>
 )
};

module.exports = FailForm;