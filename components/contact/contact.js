var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var AutoBio = React.createClass({
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
          <Link to='/' className="white-text waves-effect waves-white btn">
            Home 
          </Link>
      </div>

      <a className="modal-trigger" href="#modal1">
      <img height="80px" width="80px" src='./image/ContactBook.png'/>
      <p>Contact Information</p>
      </a>

				
  	<div id="modal1" className="modal modal-fixed-footer">
    <div className="modal-content">
      	<div className="col s6">
			<div className="card-panel green">
     			<span className="white-text ">
     			<p>Jonathan Longden</p> 
				<p>400 N Kennedy</p>
				<p>Belgrade, MT 59714</p>
				<p>Cell Phone: (605) 300-0046</p>
				<p>longden.jonathanedgar@gmail.com</p>
     			</span>
     		</div>
	   	</div>   	
    </div>
 	</div>
				
			</div>
			)
	}
});

module.exports = AutoBio;