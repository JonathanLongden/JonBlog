var React = require('react');
var Search = require('./search.js');

var Home = React.createClass({
	render: function(){
		return (
			<div>
				<Search />
			</div>
			)
	}
});

module.exports = Home;