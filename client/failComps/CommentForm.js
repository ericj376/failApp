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

var CommentForm = React.createClass({
  render: function(){
    window.u = this.props.userLocal;
    if(this.props.userLocal.user !== "no user"){
      var formComment = 
        <div className="container">
          <div className="row col-lg-8 col-lg-offset-4">
            <form onSubmit={ this.props.handleSubmit } role='form' >
              <textarea className="form" rows="6" columns="3" value={ this.props.body } onChange={ this.props.onBodyChange }
                placeholder='Add comments here!' id="comment"></textarea><br/>
              <button type='submit' className="legend button-color">Submit Comment</button>
            </form>
          </div>
        </div>
    } else {
      var formComment = null;
    };
    return(
      <div>
       {formComment}
      </div>
    )
  }
});

module.exports = CommentForm;