/*
  Index
    MyPage
      MyPageBox 
        UserInfoData
          UserInfo
        DailyChallengeData
          DailyChallenge
        CompletedChallengesData
          CompletedChallengesList
            CompletedChallengesCard
*/

var React = require('react');
var UserInfo = require('./UserInfo');

var UserInfoData = React.createClass({
 getInitialState: function(){
  return{
    user: null,
  }
 },

 loadUserFromServer: function(){
  
  var self = this;
  $.ajax({
    url: '/getUser',
    method: 'GET'
  }).done(function(data){
    console.log(data, "this is loadUserFromServer" )
    self.setState({ user: data});
  })
 },

 componentDidMount: function(){
  this.loadUserFromServer();
 },



  render: function(){
    return <UserInfo user={this.state.user ? this.state.user : null} loadUserFromServer={this.loadUserFromServer}/>
  }

});

module.exports = UserInfoData;