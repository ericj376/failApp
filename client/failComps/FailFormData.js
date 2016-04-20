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
var FailForm = require('./FailForm');

var FailFormData = React.createClass({
  getInitialState: function(){
    return{
      title: null,
      challenge: null,
      img: null,
      category: null,
    }
  },
  onTitleChange: function(event){
    this.setState({ title: event.target.value})
  },
  onChallengeChange: function(event){
    this.setState({ challenge: event.target.value})
  },
  onImgChange: function(event){
    this.setState({ img: event.target.value})
  },
  onCategoryChange: function(event){
    this.setState({ category: event.target.value})
  },
  submitFailToServer: function(event){

    var failData = {
      title: this.state.title,
      challenge: this.state.challenge,
      img: this.state.img,
      category: this.state.category,
    };
    var self = this;

    $.ajax({
      url: '/api/fail',
      method: 'POST',
      data: failData
    }).done(function(data){
      self.props.toggleActiveComp('fail');
    });
    this.setState({title:'', img:'', challenge:'', rating:'', category:''});
  },

  render: function(){
    return(
      <div>
        <FailForm submitFailToServer={this.submitFailToServer} onTitleChange={this.onTitleChange} onChallengeChange={this.onChallengeChange} onImgChange={this.onImgChange} onCategoryChange={this.onCategoryChange} categories={this.props.categories} {...this.state} />
      </div>
    )
  }
});

module.exports = FailFormData;