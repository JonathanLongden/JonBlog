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
								Blog
								</a>
							</Link>
						</div>
						<div className="col 6 rightu">
							<Link to='/resume'>
								<a className="red-text waves-effect waves-light btn">
								Resume
								</a>
							</Link>
						</div>
						<div className="col 6 leftd">
							<Link to='/inspiration'>
								<a className="white-text waves-effect waves-light btn">
								Inspiration
								</a>
							</Link>
						</div>
						<div className="col 6 rightd">
							<Link to='/contact'>
								<a className="black-text waves-effect waves-light btn">
								Contact
								</a>
							</Link>
						</div>	
					</div>
				</div>
				
			</div>
			)
	}
});

module.exports = Home;