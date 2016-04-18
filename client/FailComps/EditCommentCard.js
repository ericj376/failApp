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

var EditCommentCard = React.createClass({
  render: function(){
    return(
        <div className="container">
          <div className="row col-lg-8 col-lg-offset-4">
            <form  role='form' onSubmit={this.props.handleCommentCardEditSubmit}>
              <fieldset className="form-group">
               <input onChange={this.props.onBodyChange} value={this.props.body} type="text" className="form-control"/>
              </fieldset>
              <button className="btn btn-success-outline" type="submit"> Submit </button>
            </form>
          </div>
        </div>
    )
  }
});

module.exports = EditCommentCard;