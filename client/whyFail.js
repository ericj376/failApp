var React = require('react');

var WhyFail = React.createClass({
	render: function(){
    return (
    	<div>
    		<div className="jumbotron">
    			<div className="container failCont">
    				<h3>“Many of life's failures are people who did not realize how close they were to success when they gave up.” 
 						Thomas A. Edison </h3>
 					</div>
	    		<div className="row">
	    			<div className="col-md-6">
	    				<img className="bigPic" href src="http://tech.co/wp-content/uploads/2015/02/Success_Failure_direct.jpg" />
	    			</div>
	    			<div className="col-md-6">
	    				<div className="container">
	    					<p className="textContainer"> Fail App was thought up, designed and developed by Amita Greer, Teague Goodvoice, Eric Ellingson and Lars Martinson of Montana Code School during the spring of 2016. They devised this app as a solution to their challenge of trying to find a job after graduating MTCS. Through the development of the Fail App they have failed many times trying to solve specific problems, however they have grown as developers and now realize that failure is just one step on the road to success.   </p>
	    				</div>
	    			</div>
    			</div>
	  			<div className="container research">
	  				<h5> Research has consistently shown that failing, and learning from these experiences, helps us accept that failure is natural. This acceptance of failing helps you move past that fear and achieve your goals.</h5>
	  			</div>
	  			<div className="row jumbotron col-xs-12">	
	  				<div className="col-xs-6 container jobResource">
	  					<h2> Resources For Jobs </h2>
  						<ul>
  							<li className="listItem"><a href="https://www.livecareer.com/resume-builder"> Resume Builder </a></li>
  							<li className="listItem"><a href="https://www.linkedin.com/pulse/how-create-killer-linkedin-profile-get-you-noticed-bernard-marr"> Linkedin Builder </a></li>
  							<li className="listItem"><a href="https://www.themuse.com/advice/how-to-answer-the-31-most-common-interview-questions"> Interview Help </a></li>
  							<li className="listItem"><a href="http://www.forbes.com/forbes/welcome/"> How To Get A Job </a></li>
  						</ul>
	  				</div>
	  				<div className="col-xs-6 container jobResource">
	  					<h2> Resources For Social Issues </h2>
	  					<ul>
		  					<li className="listItem"><a href="https://www.psychologytoday.com/blog/anxiety-files/201410/how-overcome-your-social-anxiety"> Getting Over Social Anxiety </a></li>
		  					<li className="listItem"><a href="http://www.anxietycoach.com/anxietytrick.html"> Overcome Anxiety </a></li>
		  					<li className="listItem"><a href="https://dphhs.mt.gov/health"> Health and Human Services </a></li>
		  					<li className="listItem"><a href="http://www.anxietycoach.com/fear-of-public-speaking.html"> Overcome Public Speaking </a></li>
  						</ul>
	  				</div>
	  			</div>
    		</div>
    	</div>
    )
  }
});

module.exports = WhyFail;