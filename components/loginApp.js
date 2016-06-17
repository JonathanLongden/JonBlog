//	LoginApp
//		LoginData
//			loginForm
//		LoginPostData
//			LoginPostForm
//		LoginToggler
var React = require('react');

var LoginPostData = require('./login/loginPostData.js');
var LoginToggle = require('./login/loginToggle.js');
var LoginData = require('./login/loginData.js');

var LoginApp = React.createClass({
	getInitialState: function(){
		return{
			activeComponent: 'LoginData'
			}
	},

	showComponent: function(){

		if(this.state.activeComponent === 'LoginData'){
			return <LoginData />
		} else if (this.state.activeComponent === 'LoginPostData'){
			return <LoginPostData toggleActiveComponent= { this.toggleActiveComponent} />
		} else {
			throw new Error('No active component', this.state.activeComponent )
		}
	},

	toggleActiveComponent: function(name){
		this.setState({
			activeComponent: name
		})
	},

	render: function(){
			
		return(
				<div>
					<LoginToggle toggleActiveComponent={this.toggleActiveComponent}/>
					{ this.showComponent() }					
				</div>
			)
	}
});


module.exports = LoginApp;