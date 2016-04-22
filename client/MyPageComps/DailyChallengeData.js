/*
  Index
    MyPage
      MyPageBox 
        UserInfoData
          UserInfo
        DailyChallengeData
          DailyChallenge
          DailyChallengeDetail
            CompletedChallengesList
              CompletedChallengesCard
*/

var React = require('react');
var DailyChallenge = require('./DailyChallenge');
var DailyChallengeDetail = require('./DailyChallengeDetail');
var CompletedChallengesList = require('./CompletedChallengesList');

var DailyChallengeData = React.createClass({
  getInitialState: function(){
    return{
      oneFail: null,
      user: null,
      oneFailId: null,
      activeComponent: null,
      completedFails: null,
      dailyChallenge: null,
    }
  },
  getId: function(type, id){
    if(type === 'showOne'){
      return this.setState({ oneFailId: id, activeComponent: 'oneFail' })
    } else if ( type === 'goBack') {
      return this.setState({ oneFailId: id, activeComponent: 'failCard' })
    } else if (type === 'challengeCompleted') { 
      console.log(id, "this is get ID")
      return this.setState({ oneFailId: id, activeComponent: 'failCard'})
    } else {
      return null
    }
  },
  loadOneFailByCategoryFromServer: function(){
    console.log("trying to load one fail");
    var self = this;

    $.ajax({
      url: '/getUser',
      method: 'GET'
    }).done(function(data){
      console.log('trying to get the user', data);
      self.setState({ user: data});  
      var categoryId = self.state.user.local.category;
      $.ajax({
        url: '/api/fail/categories/' + categoryId,
        method: 'GET'
      }).done(function(data){
        console.log("trying to see the loaded one fail", data);
        self.setState({
          oneFail: data,
          oneFailId: data._id,
          activeComponent: "failCard"
        });
      })
    }) 
  },
  loadCompletedChallengesFromServer: function(){
    var self = this;

    $.ajax({
      url: '/api/fail/user/completed/' + this.state.oneFailId,
      method: 'GET'
    }).done(function(data){
      self.setState({
        completedFails: data.local.completed,
        activeComponent: "oneFail"
      });
    })
  },
  submitCompletedDailyChallenge: function(id){
    var self = this;
    console.log("this is submit Completed Challenge")

    $.ajax({
      url: 'api/fail/user/completed/' + id,
      method: 'POST'
    }).done(function(data){
      console.log(data, "THIS IS SUBMIT COMPLETE DAILY CHALLENGE")
      self.loadOneFailByCategoryFromServer();
      self.loadCompletedChallengesFromServer();
    })
  },
  componentDidMount: function() {
    this.loadOneFailByCategoryFromServer();
    this.loadCompletedChallengesFromServer();
  },
  render: function() {
    var {oneFail, oneFailId, completedFails} = this.state;


    if(this.state.activeComponent === 'oneFail'){
      return (
        <div>
          <DailyChallengeDetail oneFail={oneFail} id={oneFailId} getId={ this.getId } />
          <CompletedChallengesList id={oneFailId} getId={this.getId} completedFails={completedFails} />
        </div>
      )
    } else if (this.state.activeComponent === 'failCard') {
      return (
        <div>
          <DailyChallenge id={oneFailId} loadOneFailByCategoryFromServer={this.loadOneFailByCategoryFromServer} oneFail={oneFail} getId={ this.getId } submitCompletedDailyChallenge={this.submitCompletedDailyChallenge} />
          <CompletedChallengesList id={oneFailId} getId={this.getId} completedFails={completedFails} />
        </div>
      )
    }  else {
      return null;
    }
  }
});

module.exports = DailyChallengeData;