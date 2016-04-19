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
    }
  },

  loadOneFailByCategoryFromServer: function(){

    console.log("loadOneFailByCategoryFromServer is here.")
 
    var self = this;
    $.ajax({
      url: '/api/fail/categories/5716893221d6892c05fca582',
      method: 'GET'
    }).done(function(data){
      console.log(data, "this is loadOneFailByCategoryFromServer");
      self.setState({oneFail: data});
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