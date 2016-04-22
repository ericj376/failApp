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
    }
  },
  getId: function(type, id){
    if(type === 'showOne'){
      return this.setState({ oneFailId: id, activeComponent: 'oneFail' })
    } else if ( type === 'goBack') {
      return this.setState({ oneFailId: id, activeComponent: 'failCard' })
    } else if (type === 'challengeCompleted') { 
      return this.setState({ oneFailId: id, activeComponent: 'failCompleted'})
      console.log("this is get id", oneFailId);
    } else {
      return null
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
      console.log("horray loadCompletedChallengesFromServer", data);
      self.setState({
        completedFails: data.local.completed,
        activeComponent: "failCompleted"
      });
      console.log(this.state);
    })
  },
  componentDidMount: function() {
    this.loadOneFailByCategoryFromServer();
    this.loadCompletedChallengesFromServer();
  },
  render: function() {
    console.log(this.state);
    var {oneFail, oneFailId, completedFails} = this.state;

    console.log("hello Jay Dawg");

    console.log("completedFails", completedFails);

    if(this.state.activeComponent === 'oneFail'){
      return <DailyChallengeDetail oneFail={oneFail} id={oneFailId} getId={ this.getId } />;
    } else if (this.state.activeComponent === 'failCard') {
      return <DailyChallenge id={oneFailId} loadOneFailByCategoryFromServer={this.loadOneFailByCategoryFromServer} oneFail={oneFail} getId={ this.getId } />;
    } else if (this.state.activeComponent === 'failCompleted') {
      return <CompletedChallengesList id={oneFailId} getId={this.getId} completedFails={completedFails} />;
    } else {
      return null;
    }
  }
});

module.exports = DailyChallengeData;