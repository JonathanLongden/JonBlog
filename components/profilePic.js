var React = require('react');

var ProfilePic = React.createClass({
	render: function(){
		return (
			<div className="profilePic"  width="250px">
				<img className="circle responsive-img" src='http://images.mentalfloss.com/sites/default/files/sonof.png' />
			</div>
			)
	}
});

module.exports = ProfilePic;