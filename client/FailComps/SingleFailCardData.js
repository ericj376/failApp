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
var SingleFailCard = require('./SingleFailCard');


var SingleFailCardData = React.createClass({
  getInitialState: function(){
    return{
      oneFail: null,
    }
  },
  getId: function(id){
    console.log(id)
  },
  loadOneFailFromServer: function(){
    var self = this;
    const ajaxProps = {
      url: '/api/fail/' + this.props.id,
      method: 'GET',
    };
    $.ajax(ajaxProps).done(function(data){
      self.setState({oneFail: data})
    })
  },
  componentDidMount: function(){
    this.loadOneFailFromServer();
  },
  render: function(){
    return this.state.oneFail ? <SingleFailCard loadOneFailFromServer={ this.loadOneFailFromServer } oneFail={ this.state.oneFail } id={ this.props.id } getId={ this.getId } /> : null;
  }

});

module.exports = SingleFailCardData;