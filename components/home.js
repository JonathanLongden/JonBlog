var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({
	render: function(){
		return (
			<div>
			
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
				
			</div>
			)
	}
});

module.exports = Home;