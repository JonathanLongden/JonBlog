var React = require('react');
var Link = require('react-router').Link;
var ProfilePic = require('./profilePic.js');
var GitHub = require('./github.js');
var LinklinPort = require('./linklinPort.js');



var Main = React.createClass({
	getInitialState: function(){
		return {
			user: ""
		}
	},

	getOneUserFromServer: function(){
		var self = this;
			$.ajax({
				method:'GET',
				url:'/user'
			}).done(function(data){
				//console.log(data);
				self.setState({ user: data });
			})
	},

	componentDidMount: function(){
		this.getOneUserFromServer();
	},
	render: function(){
		if(this.state.user.user !== "anonymous"){
			return(
		<div>
			<div className="row">
					<div className="col s4">	
						<ProfilePic/>
						<GitHub />
						<LinklinPort />
					</div>
					<div className="col s8">
						<h1> Welcome "Anonymous User" to: </h1>
						<h2> Jon Longden's Blog </h2>
							
					</div>
				</div>
				<div className="divider">
				</div>		
		
		{this.props.children}	
		</div>				
		)

	} else {

		return (
			<div>
				<div className="row">
					<div className="col s4">	
						<ProfilePic/>
						<GitHub />
						<LinklinPort />
					</div>
					<div className="col s8">
						<h1> Welcome "Anonymous User" to: </h1>
						<h2> Jon Longden's Blog </h2>
							
					</div>
				</div>
				<div className="divider">
				</div>			
			
			{this.props.children}	
			</div>	
		)
		}
	}
});
module.exports = Main;

//<div className="waves-effect waves-light btn" href="https://github.com/JonathanLongden?tab=repositories">GitHub</div>
//<div className="waves-effect waves-light btn" href="https://www.linkedin.com/in/jonathan-longden-9b94056b">linkedin</div>
					


							// <Link to = '/signout'>
							// 	<li><a className="black-text"
							// 	onClick={ this.logoutUser } 
							// 	type="submit" 
							// 	name="action">Sign out</a>
							// 	</li>
							// </Link>





