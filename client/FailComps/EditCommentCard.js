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
          Edit Comment Card Data
            Edit Comment Card
*/

var React = require('react');

var EditCommentCard = React.createClass({
  render: function(){
    return(
        <div className="container">
        <div className="row col-lg-8 col-lg-offset-4">
          <form  role='form' >
            <textarea className="form" rows="6" columns="3" 
            placeholder='Edit comment here!' id="comment"></textarea><br/>
              <button type='submit' className="legend button-color">Submit Comment</button>
          </form>
        </div>
      </div>
      )
  }
});

module.exports = EditCommentCard;