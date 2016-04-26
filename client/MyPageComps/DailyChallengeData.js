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
      ratingScale: 0,
    }
  },
  getId: function(type, id){
    if(type === 'showOne' ? 'showOne' && 'challengeCompleted' : null){
      return this.setState({ oneFailId: id, activeComponent: 'oneFail' })
    } else if ( type === 'goBack') {
      return this.setState({ oneFailId: id, activeComponent: 'failCard' })
    } else if (type === 'challengeCompleted') { 
      return this.setState({ oneFailId: id, activeComponent: 'failCard'})
    } else {
      return null
    }
  },
  loadFailData: function(){
    var self = this;
    $.ajax({
      url: '/getUser',
      method: 'GET'
    }).done(function(data){
      self.setState({ user: data});  
      var categoryId = self.state.user.local.category;
      console.log("got user", data, categoryId);
      $.ajax({
        url: '/api/fail/categories/' + categoryId,
        method: 'GET'
      }).done(function(data){
        console.log("got category", data);
        self.setState({
          oneFail: data,
          oneFailId: data ? data._id : null 
        });
        $.ajax({
          url: '/api/fail/user/completed/',
          method: 'GET'
        }).done(function(data){
          console.log("got completed", data)
          self.setState({
            completedFails: data.local.completed,
            activeComponent: "oneFail"
          });
        })
      })
    }) 
  },
  
  submitRatingToServer: function(){
    var self = this;
    
    var data = {ratingScale: this.state.ratingScale};
    $.ajax({
      url: '/api/ratings/' + this.state.oneFailId,
      method: 'POST',
      data: data
    }).done(function(data){
    })
  },
  submitCompletedDailyChallenge: function(id){
    var self = this;
    
    $.ajax({
      url: 'api/fail/user/completed/' + id,
      method: 'POST'
    }).done(function(data){
      self.loadFailData()
    })
  },

  updateRate: function(rate){
    console.log("found rate", rate);
    this.setState({ ratingScale: rate })
    this.submitRatingToServer();
  },
  componentDidMount: function() {
    this.loadFailData();
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
          <DailyChallenge ratingScale={this.state.ratingScale} updateRate={this.updateRate} id={oneFailId} oneFail={oneFail} getId={ this.getId } submitCompletedDailyChallenge={this.submitCompletedDailyChallenge} />
          <CompletedChallengesList id={oneFailId} getId={this.getId} completedFails={completedFails} ratingScale={this.state.ratingScale}/>
        </div>
      )
    }  else {
      return null;
    }
  }
});

module.exports = DailyChallengeData;