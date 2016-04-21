/*
  Index
    MyPage
      MyPageBox 
        UserInfoData
          UserInfo
        DailyChallengeData
          DailyChallenge
          DailyChallengeDetail
        CompletedChallengesData
          CompletedChallengesList
            CompletedChallengesCard
*/

var React = require('react');
var DailyChallenge = require('./DailyChallenge');
var DailyChallengeDetail = require('./DailyChallengeDetail');

var DailyChallengeData = React.createClass({
  getInitialState: function(){
    return{
      oneFail: null,
      user: null,
      oneFailId: null,
      activeComponent: null,
    }
  },
  getId: function(type, id){
    if(type === 'showOne'){
      console.log("this is getId", id);
      return this.setState({ oneFailId: id, activeComponent: 'oneFail' })
    } else if ( type === 'goBack') {
      return this.setState({ oneFailId: id, activeComponent: 'failCard' })
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
      console.log(categoryId, "trying to find the cat id");
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
  componentDidMount: function() {
    this.loadOneFailByCategoryFromServer();
  },
  render: function() {
    if(this.state.activeComponent === 'oneFail'){
      console.log("this is showCompppppppppp", this.state.activeComponent);
      return <DailyChallengeDetail oneFail={this.state.oneFail} id={this.state.oneFailId} getId={ this.getId } />
    } else if (this.state.activeComponent === 'failCard') {
      console.log('were in failcard now', this.state.activeComponent);
      return <DailyChallenge id={this.state.oneFailId} loadOneFailByCategoryFromServer={this.loadOneFailByCategoryFromServer} oneFail={this.state.oneFail} getId={ this.getId } />;
    } else {
       console.log('were nulllllling', this.state.activeComponent);
      return null;
    }
  }


});

module.exports = DailyChallengeData;