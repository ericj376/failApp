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
var Rating = require('react-rating');


var DailyChallenge = React.createClass ({
  render: function() {
    return (
      <div className="card card-size2">
        <div className="card-body"><img className="fail-img" src={this.props.oneFail.img}/>
          <div className="card-body card-flex">
            <div className="buttonPosition">  
              <div>
                <button onClick={this.props.getId.bind(null, 'showOne', this.props.id)} className="btnSpace btn btn-primary"> View More </button>
              </div>
            </div>
            <div className="titlePosition1">
              <p>{this.props.oneFail.title}</p>
            </div>
            <div className="categoryPosition">
              <p>Category: {this.props.oneFail.category.name}</p>
            </div>
            <div className="textPosition">
              <p>{this.props.oneFail.challenge}</p>
            </div>
            <div>
              <button onClick={this.props.submitCompletedDailyChallenge.bind(null, this.props.id)} className="btnSpace1 btn btn-primary"> Challenge Completed! </button>
            </div>
            <div>
              <Rating onClick={this.props.updateRate} />
            </div>
          </div>
        </div>
      </div>
    )        
   }
 });

module.exports = DailyChallenge;

