var React = require('react');
var Link = require('react-router').Link;

var AutoBio = React.createClass({
	render: function(){
		return (

			<div>
			<div className="backbutton">
	          	<Link to='/' className="white-text waves-effect waves-white btn">
	            Home
	          	</Link>
     		 </div>

				<div className="row">
					<div className="col s6">
						<button>Javascript Games </button>
					</div>
					<div className="col s6">
						<button> Animations </button>
					</div>
				</div>
				
				
			</div>
			)
	}
});

module.exports = AutoBio;