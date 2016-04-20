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
      return this.setState({oneFailId: id, activeComponent: 'oneFail'})
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
          oneFailId: data._id
        });
      })
    }) 
  },
  componentDidMount: function() {
    this.loadOneFailByCategoryFromServer();
  },

  render: function() {
    if(this.state.activeComponent === 'oneFail'){
      console.log("this is showComp")
      return <DailyChallengeDetail oneFail={this.state.oneFail} />
    } else if (this.state.oneFail) {
      return <DailyChallenge id={this.state.oneFailId} loadOneFailByCategoryFromServer={this.loadOneFailByCategoryFromServer} oneFail={this.state.oneFail} getId={ this.getId } />;
    } else {
      return null;
    }
  }


});

module.exports = DailyChallengeData;