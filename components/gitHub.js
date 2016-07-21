var React = require('react');

var GitHub = React.createClass({
	render: function(){
		return (
			<div className="rightpic">
				<a href="https://github.com/JonathanLongden?tab=repositories">
				<img height="80px" width="80px" src='./image/Octocat/Octocat.png'/>
				</a>
			</div>
			)
	}
});

module.exports = GitHub;