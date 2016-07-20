var React = require('react');


var Result = require('./result');

var Search = React.createClass({
	getInitialState: function(){
		return { showResults: false};
	},
	onClick: function (){
		this.setState({ showResults: true });
	},
	render: function (){
		return (
			<div>
				<input type="submit" value="Search" onClick={this.onClick} />
				{this.state.showResults ? <Result/> : null }
			</div>
			);
	}

});



module.exports = Search;