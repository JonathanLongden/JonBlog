var React = require('react');

var LoginToggle = React.createClass({

	render: function(){
		return(
			<div>
				<button className="btn btn-warning" 
				onClick={this.props.toggleActiveComponent.bind(null,'LoginData')}> Login</button>
				<button className="btn btn-warning" 
				onClick={this.props.toggleActiveComponent.bind(null,'LoginPostData')}> Create Login</button>

			</div>
			)
	}
})

module.exports = LoginToggle;