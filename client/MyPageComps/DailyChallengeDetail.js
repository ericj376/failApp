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
    var categoryName = this.props.oneFail ? this.props.oneFail.category.name : "no category";
    var title = this.props.oneFail ? this.props.oneFail.title : "no title";
    var img = this.props.oneFail ? this.props.oneFail.img: "no img";
    var challenge = this.props.oneFail ? this.props.oneFail.challenge : "no challenge";

    return(
      <div className="jumbotron jumbotron-fluid SFCcontainer">
        <div className="container singleFailCard">
          <p className="SFCtitlePosition">{title}</p>
          <img className="SFCimgPosition" src={img}/>
          <p className="SFCchallengePosition">{challenge}</p>
          <p className="SFCcategory">{categoryName}</p>
          <button onClick={this.props.getId.bind(null, 'goBack', this.props.id)} className="fa fa-undo fa-lg goBackButton pull-right fa-stack" aria-hidden="true"></button>
        </div>
      </div>
    )
  }
});

module.exports = DailyChallengeDetail;