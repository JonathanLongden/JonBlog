var React = require('react');
var Link = require('react-router').Link;
var ReactDOM = require('react-dom');

var Blog = React.createClass({
	componentDidMount() {
		  var element = ReactDOM.findDOMNode(this.refs.dropdown) //for materialize to work

		$(element).ready(function() {
	  	$('.modal-trigger').leanModal({
	  	dismissible: true, // Modal can be dismissed by clicking outside of the modal
	  	opacity: .5, // Opacity of modal background
	  	in_duration: 300, // Transition in duration
	  	out_duration: 200, // Transition out duration
	  	ready: function() {  }, // Callback for Modal open
	  	complete: function() {  } // Callback for Modal close
			}
		);
	    $('select').material_select();
	  });
	},
	render: function(){
		return (

			<div>
				<div className="backbutton">
					<Link to='/' className="btn">
						Home
					</Link>
				</div>


				<div className="login">

				<a className="waves-effect waves-light btn modal-trigger" href="#modal21">Click to Create Account or Log in!</a>
				<div id="modal21" className="modal">
				<div className="modal-content">
					<a className="btn">Create Account</a>
					<a className="btn">Login</a>
				</div>


				
				<div className="modal-footer">
				      <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
				</div>
				</div>




				</div>







				<div className="Postblog">
				<h1> Please Leave  a Message </h1>
				</div>
			</div>
			)
	}
});

module.exports = Blog;