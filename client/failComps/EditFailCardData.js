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
var EditFailCardForm = require('./EditFailCardForm');

var EditFailCardData = React.createClass({
  getInitialState: function(){
    return{
      title: null,
      challenge: null,
      img: null,
      rating: null,
      category: null,
    }
  },
  loadOneFailFromServer: function(){
    var self = this;
    $.ajax({
      url: '/api/fail/' + this.props.id,
      method:'GET',
    }).done(function(data){
      self.setState({
        title: data.title,
        challenge: data.challenge,
        img: data.img,
        rating: data.rating,
        category: data.category,
      })
    })
  },
  componentDidMount: function(){
    this.loadOneFailFromServer();
  },
  updateFailForm: function(fail){
    $.ajax({
      url: '/api/fail/' + this.props.id,
      dataType: 'json',
      type: 'PUT',
      data: fail,
      success: function(data){
        this.loadOneFailFromServer();
        this.props.toggleActiveComp('oneFail');
      }.bind(this),
      error: function(xhr, status, err){
        console.error(status, err.toString());
      }.bind(this)
    });
  },
 onTitleChange: function(event){
  this.setState({title: event.target.value})
 },
 onChallengeChange: function(event){
  this.setState({challenge: event.target.value})
 },
 onImgChange: function(event){
  this.setState({img: event.target.value})
 },
 onRatingChange: function(event){
  this.setState({rating: event.target.value})
 },
 onCategoryChange: function(event){
  this.setState({category: event.target.value})
 },
 handleFailEditSubmit: function(e){
  e.preventDefault();

    var title = this.state.title;
    var challenge = this.state.challenge;
    var img = this.state.img;
    var rating = this.state.rating;
    var category = this.state.category;

    this.updateFailForm({ title: title, challenge: challenge, img: img, rating: rating, category: category });
    this.setState({ title: '', challenge: '', img: '', rating: '', category: ''})
 },

  render: function(){
    return (
      <div>
      <EditFailCardForm handleFailEditSubmit={this.handleFailEditSubmit} onTitleChange={this.onTitleChange} onChallengeChange={this.onChallengeChange} onImgChange={this.onImgChange} onRatingChange={this.onRatingChange} onCategoryChange={this.onCategoryChange} {...this.state}/>
      </div>
    )
  }
});


module.exports = EditFailCardData;