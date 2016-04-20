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
var DailyChallenge = require('./DailyChallenge');

var DailyChallengeData = React.createClass({
  getInitialState: function(){
    return{
      oneFail: null,
      user: null,
    }
  },

  loadOneFailByCategoryFromServer: function(){
    var self = this;

    $.ajax({
      url: '/getUser',
      method: 'GET'
    }).done(function(data){
      self.setState({ user: data});  
      var categoryId = self.state.user.local.category;
      $.ajax({
        url: '/api/fail/categories/' + categoryId,
        method: 'GET'
      }).done(function(data){
        self.setState({oneFail: data});
      })
    }) 
  },
  componentDidMount: function() {
    this.loadOneFailByCategoryFromServer();
  },
  render: function() {
    return this.state.oneFail ? <DailyChallenge loadOneFailByCategoryFromServer={this.loadOneFailByCategoryFromServer} oneFail={this.state.oneFail} /> : null;
  }


});

module.exports = DailyChallengeData;