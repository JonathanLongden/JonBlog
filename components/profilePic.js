var React = require('react');

var ProfilePic = React.createClass({
	render: function(){
		return (
			<div className="row valign-wrapper">
				<img className="circle responsive-img" src='http://images.mentalfloss.com/sites/default/files/sonof.png' />
			</div>
			)
	}
});

module.exports = ProfilePic;