var React = require('react');
var ReactDOM = require('react-dom');
var EducationPic = require('./educationPic.js');

var Resume = React.createClass({
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

		<h1>Resume</h1>
			
  	<div className="modal-trigger waves-effect waves-light btn" href="#modal1">Contact Information</div>
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
  <div className="divider"></div>
 	<div className="modal-trigger waves-effect waves-light btn" href="#modal2">Education</div>
 	<div id="modal2" className="modal modal-fixed-footer">
    <div className="modal-content">
			<div className="card-panel green">
				<span className="white-text ">
					<div className="row">	
						<p>Montana Code Schools
						</p>
						<p>Bozeman, MT
						</p>
						<p> 2016-Summer
						</p>
					</div>
					<div className="row">
						<p>Coder of the Mern Stack
						</p>					
					</div>
					<div className="row">    
						<p>Western Governors University
						</p>	
						<p>Salt Lake City, UT
						</p>		
						<p> 2010-2013
						</p>				
					</div>
					<div className="row">	
						<p>Masters of Art in Mathematics Educations for Grades (5-12)
						</p>
					</div>
					<div className="row">
						<p>Montana State University—Northern
						</p>
						<p>Havre, MT
						</p>
						<p> 2006-2009
						</p>
					</div>			
					<div className="row">	
						<p>Bachelor of Science in Education Secondary Education General Science (5-12)
						</p>		
					</div>
					<div className="row">
						<p>Fort Peck Community College
						</p>
						<p>Poplar, MT
						</p>
						<p>2003-2006
						</p>		
					</div>
					<div className="row">
						<p>Associated of Applied Science Degree 2006
						</p>
					</div>
					<div className="row">	
						<p>Poplar High School	
						</p>
						<p>Poplar, MT
						</p>
						<p>1999-2003
						</p>	
					</div>
					<div className="row">
						<p>Salutatorian
						</p>
					</div>
				</span>
     		</div>  	  	
    </div>
 	</div>
 	<div className="divider"></div>
 	<div className="modal-trigger waves-effect waves-light btn" href="#modal3">Professional Experience</div>
  	<div id="modal3" className="modal modal-fixed-footer">
    <div className="modal-content">
      	<div className="col s6">
			<div className="card-panel green">
     			<span className="white-text ">
     			Fort Peck Community College Math Instructor		Poplar, MT	       2013-2014-Aug

				Poplar Middle School Science Teacher			Poplar, MT		2014-Spring

				Brockton High School Science Teacher			Brockton, MT		2011- 2013

				Brockton High School Math Teacher				Brockton, MT		2010 - 2011

				Fort Peck Community College Science Teacher		Poplar, MT		2010-Summer

				Broadus High School Student Teaching			Broadus, MT		2009-Fall
				 
				Havre Middle School Practicum Spring			Havre, MT		2009
				 
				Havre High School Practicum Fall 				Havre, MT		2008
				 
				Havre High School Practicum Spring 			Havre, MT		2008
				 
				Poplar Middle Schools Substituted 				Poplar, MT		2006– 2008
     			</span>
     		</div>
	   	</div>   	
    </div>
 	</div>
 	<div className="divider"></div>
 	<div className="modal-trigger waves-effect waves-light btn" href="#modal4">Work Experience</div>
  	<div id="modal4" className="modal modal-fixed-footer">
    <div className="modal-content">
      	<div className="col s6">
			<div className="card-panel green">
     			<span className="white-text ">
     			Gallatin Rest Home						Bozeman, MT 	2015-2016
				 
				Bridger Health Care						Bozeman, MT		2014

				Prairie Travelers						Glasgow, MT		2013-2014

				Montana State University-Northern Resident Hall Advisor 	Havre, MT		2007-2009
					
				Montana State University-Northern Dish Washer  		Havre, MT		2007-2009
				 
				Montana State University-Northern Desk Security Guard 	Havre, MT		2006-2009
				 
				Certified Nursing Assistant 					Traveler		2002-2014
     			</span>
     		</div>
	   	</div>   	
    </div>
 	</div>
	<div className="divider"></div>		


 	<div className="modal-trigger waves-effect waves-light btn" href="#modal5">Professional Organization</div>
  	<div id="modal5" className="modal modal-fixed-footer">
    <div className="modal-content">
      	<div className="col s6">
			<div className="card-panel green">
     			<span className="white-text ">
     			Montana Education Association
				 
				First Aid
				 
				CPR
     			</span>
     		</div>
	   	</div>   	
    </div>
 	</div>


			

		


			</div>
			)
	}
});

module.exports = Resume;