var React = require('react');

var CharacterToggle = React.createClass({

	render: function(){
		return(
			<div>

				<button className="btn btn-warning" 
				onClick={this.props.toggleActiveComponent.bind(null,'AutoBio')}> AutoBio</button>
				<button className="btn btn-warning" 
				onClick={this.props.toggleActiveComponent.bind(null,'Resume')}> Resume </button>
				<button className="btn btn-warning" 
				onClick={this.props.toggleActiveComponent.bind(null,'Quotes')}> Quotes</button>

			</div>
			)
	}
})

module.exports = CharacterToggle;