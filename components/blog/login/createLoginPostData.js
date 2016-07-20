// login
//	loginAction
//	loginPostData
//		loginPostForm


var React = require('react');
var CreateLoginPostForm = require('./createLoginPostForm');

var CreateLoginPostData = React.createClass({
	


	getInitialState: function(){
		return{
			email: null,
			passWord: null,
			firstName: null,
			lastName: null
			
		}
	},
	handleEmailChange: function(event){
		this.setState ({ email: event.target.value })
	},
	handlePassWordChange: function(event){
		this.setState ({ passWord: event.target.value })
	},
	handleFirstNameChange: function(event){
		this.setState ({ firstName: event.target.value })
	},
	handleLastNameChange: function(event){
		this.setState ({ lastName: event.target.value })
	},
	handleUserSubmit: function(event){
		event.preventDefault();
		console.log(this);
		var user = {};
		user.email = this.state.email;
		user.passWord = this.state.passWord;
		user.firstName = this.state.firstName;
		user.lastName = this.state.lastName;

		this.handleNewUserPost(user);
		this.setState({
			email: '' , passWord: '' , firstName: '' , lastName: ''
		});
	},
	handleNewUserPost: function(user){

		$.ajax({
			url:'/auth',
			method: 'POST',
			dataType: 'json',
			data:  user,
			success: function(data){
			}.bind(this),
			error: function(xhr, status, error){
				console.log('/user', status, error.toString());
			}.bind(this)
		})
	}, 


	  render: function(){
	    return (
	      <div>
				<h1></h1>
				<CreateLoginPostForm 	handleUserSubmit={this.handleUserSubmit} 
										handleEmailChange={this.handleEmailChange}
										handlePassWordChange={this.handlePassWordChange}
										handleFirstNameChange={this.handleFirstNameChange}
										handleLastNameChange={this.handleLastNameChange}
										
				/>
			</div>
	      )
	}
});

module.exports = CreateLoginPostData;
