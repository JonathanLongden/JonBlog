var React = require('react');

var Blog = React.createClass({
	render: function(){
		return (

			<div>
				<div className="login">
				 <a className="btn">Click to Create a Account or Log in!</a>
				</div>
				<div className="Postblog">
				<h1> Please Leave  a Message </h1>
				</div>
			</div>
			)
	}
});

module.exports = Blog;