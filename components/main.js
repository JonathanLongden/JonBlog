var React = require('react');
var Link = require('react-router').Link;
var ProfilePic = require('./profilePic.js');


var Main = React.createClass({
	// getInitialState: function(){
	// 	return {
	// 		user: ""
	// 	}
	// },

	// getOneUserFromServer: function(){
	// 	var self = this;
	// 		$.ajax({
	// 			method:'GET',
	// 			url:'/user'
	// 		}).done(function(data){
	// 			//console.log(data);
	// 			self.setState({ user: data });
	// 		})
	// },

	// componentDidMount: function(){
	// 	this.getOneUserFromServer();
	// },
	// logoutUser: function(user){
	// 	var self = this;
	// 	//var user = self.state.user;
	// 	$.ajax({
	// 		url: '/logout',
	// 		method: 'GET', 
	// 		success: function(data){
	// 			$.ajax({
	// 			method:'GET',
	// 			url:'/user'
	// 		}).done(function(data){
	// 			console.log(data);
	// 			self.setState({ user: data });
	// 			//window.location = "http://morning-sea-89915.herokuapp.com/"
	// 			})
	// 			//self.setState( data );
	// 			//console.log("Logout successful.", data);
	// 		}.bind(self),
	// 		error: function(xhr, status, err){
	// 			console.error('/logout', status, err.toString());
	// 		}
	// 	})
	// },
	render: function(){
		//if(this.state.user.user !== "anonymous"){
			return(
		<div>
			<div className="row">
				<div className="col s3">
					<ProfilePic/>
				</div>
				<div className="col s9">
					<h1>Better Design by Nature</h1>	
				
			</div>
			</div>
					<div className="divider">
			</div>			
			<div className="row">
				<div className="box">
						<div className="col 6 leftu">
							<Link to='/blog'> 
								<a className="yellow-text waves-effect waves-light btn">
								<i className="material-icons right">Blog
								</i></a>
							</Link>
						</div>
						<div className="col 6 rightu">
							<Link to='/resume'>
								<a className="red-text waves-effect waves-light btn">
								<i className="material-icons right">Resume
								</i></a>
							</Link>
						</div>
						<div className="col 6 leftd">
							<Link to='/inspiration'>
								<a className="white-text waves-effect waves-light btn"><i className="material-icons right">
								Inspiration
								</i></a>
							</Link>
						</div>
						<div className="col 6 rightd">
							<Link to='/contact'>
									<a className="black-text waves-effect waves-light btn">
									<i className="material-icons right">Contact
									</i></a>
							</Link>
						</div>	
				</div>
			</div>
			
		{this.props.children}	
		</div>				
		)
	}
});
module.exports = Main;


							// <Link to = '/signout'>
							// 	<li><a className="black-text"
							// 	onClick={ this.logoutUser } 
							// 	type="submit" 
							// 	name="action">Sign out</a>
							// 	</li>
							// </Link>




// } else {

// 			return(
// 				<div>
// 				<div> 
// 					<div className="buttonBox">
// 						<Link to='/'> 
// 							<button className="btn btn-success">Home</button>
// 						</Link>
// 						<Link to='/character'>
// 							<button className="btn btn-success">Character</button>
// 						</Link>
// 						<Link to='/inspiration'>
// 							<button className="btn btn-success">Inspiration</button>
// 						</Link>
// 						<Link to='/contact'>
// 							<button className="btn btn-success">Contact</button>
// 						</Link>
// 						<Link to='/login'>
// 							<button className="btn btn-success">Login</button>
// 						</Link>
// 					</div>
// 						{this.props.children}
// 				</div>
// 				<footer className = 'page-footer grey' >
// 					<div className = 'footer-copyright'>
// 						<div className = 'container '>
// 							<p className = 'white-text'>By Jonathan E. Longden</p>
// 						</div>
// 					</div>

// 				</footer>	
// 				</div>	

// 					)
// 				}
