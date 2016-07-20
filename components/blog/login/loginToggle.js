var React = require('react');

var LoginToggle = React.createClass({

	render: function(){
		return(
			<div>
				<button className="btn btn-warning" 
				onClick={this.props.toggleActiveComponent.bind(null,'LoginData')}> Login </button>
				<button className="btn btn-warning" 
				onClick={this.props.toggleActiveComponent.bind(null,'CreateLoginPostData')}> Create Login </button>
				<button className="btn btn-warning"
				onClick={this.props.toggleActiveComponent.bind(null,'LogOutData')}> Log-Off </button>

			</div>
			)
	}
})

module.exports = LoginToggle;