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


var DailyChallenge = React.createClass ({
  render: function() {
    console.log(this.props.id, "this is DailyChallenge")
    return (
      <div className="card card-size">
        <div className="card-body"><img className="fail-img" src={this.props.oneFail.img}/>
          <div className="card-body card-flex">
            <div className="buttonPosition">  
                <div>
                  <button onClick={this.props.getId.bind(null, 'showOne', this.props.id)} className="btnSpace btn btn-primary"> View More </button>
                </div>
                <div className="">
                  <p>{this.props.oneFail.title}</p>
                </div>
                <div className="">
                  <p>Category: {this.props.oneFail.category.name}</p>
                </div>
                <div className="">
                  <p>{this.props.oneFail.challenge}</p>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value=""/>
                    Challenge Completed!
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )        
    }
  });

module.exports = DailyChallenge;

