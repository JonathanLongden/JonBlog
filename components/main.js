var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<div className="container jumbotron"> 
					<h1> Jon's Picture </h1>

					<div className="buttonBox">
						<Link to='/'> 
							<button className="btn btn-success">Home</button>
						</Link>
						<Link to='/character'>
							<button className="btn btn-success">Character</button>
						</Link>
						<Link to='/inspiration'>
							<button className="btn btn-success">Inspiration</button>
						</Link>
						<Link to='/contact'>
							<button className="btn btn-success">Contact</button>
						</Link>
						<Link to='/login'>
							<button className="btn btn-success">Login</button>
						</Link>
					</div>


					{this.props.children}

				</div>	
			</div>
			)
	}
});

module.exports = Main;