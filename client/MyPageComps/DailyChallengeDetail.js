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

var DailyChallengeDetail = React.createClass({
  render: function(){
    var user = this.props.user ? this.props.user.local.email : null;
    var categoryName = this.props.oneFail.category ? this.props.oneFail.category.name : "no category";

    return(
      <div>
        <div>
          <div>
            <button onClick={this.props.getId.bind(null, 'goBack', this.props.id)} className="btnSpace btn btn-primary"> Go Back </button>
          </div>
            <p>{this.props.oneFail.title}</p>
            <img src={this.props.oneFail.img}/>
            <p>Challenge: {this.props.oneFail.challenge}</p>
            <p>Category: {categoryName}</p>
        </div>
      </div>
    )
  }
});

module.exports = DailyChallengeDetail;