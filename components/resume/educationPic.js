var React = require('react');

var EducationPic = React.createClass({
	render: function(){
		return (
			<div className="card-image waves-effect waves-block waves-light">
			
				<img className="activator" height="20%" width="20%" src='./image/education.png'/>
			
			</div>
			)
	}
});

module.exports = EducationPic;