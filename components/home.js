var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({
	render: function(){
		return (
			<div>
			
				<div className="row">
				<div className="box">
						<div className="col 6 leftu">
							<Link to='/blog' className="btn">
								Blog
							</Link>
						</div>
						<div className="col 6 rightu">
							<Link to='/resume' className="btn">
								Resume
							</Link>
						</div>
						<div className="col 6 leftd">
							<Link to='/inspiration' className="btn" >
								Inspiration
							</Link>
						</div>
						<div className="col 6 rightd">
							<Link to='/contact' className="btn">
								Contact
							</Link>
						</div>	
					</div>
				</div>
				
			</div>
			)
	}
});

module.exports = Home;