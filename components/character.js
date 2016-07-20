var React = require('react');

var AutoBio = require('./character/autoBio.js');
var CharacterToggle = require('./character/characterToggle.js');
var Resume = require('./character/resume.js')
var Quotes = require('./character/quotes.js')

var Character = React.createClass({
	getInitialState: function(){
		return{
			activeComponent: 'AutoBio'
			}
	},

	showComponent: function(){

		if(this.state.activeComponent === 'AutoBio'){
			return <AutoBio/>
		} else if (this.state.activeComponent === 'Resume'){
			return <Resume toggleActiveComponent= { this.toggleActiveComponent} />
		} else if (this.state.activeComponent === 'Quotes'){
			return <Quotes toggleActiveComponent = { this.toggleActiveComponent} />
		} else	{
			throw new Error('No active component', this.state.activeComponent )
		}
	},

	toggleActiveComponent: function(name){
		this.setState({
			activeComponent: name
		})
	},
	render: function(){
		return (
			<div>
				<CharacterToggle toggleActiveComponent={this.toggleActiveComponent}/>
					{ this.showComponent() }

			</div>
			)
	}
});

module.exports = Character;