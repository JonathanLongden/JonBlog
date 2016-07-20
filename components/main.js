var React = require('react');
var Link = require('react-router').Link;
var ProfilePic = require('./profilePic.js');


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
				<div className="col s3">
					<ProfilePic/>
				</div>
				<div className="col s9">

					<h1> Hello { props.user.user.username } </h1>

					<h2>Better Design by Nature</h2>	
				
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
					<div className="col s3">
						<ProfilePic/>
					</div>
					<div className="col s9">
						<h1> Welcome "Anonymous User" </h1>
						<h2>Better Design by Nature</h2>	
					
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
