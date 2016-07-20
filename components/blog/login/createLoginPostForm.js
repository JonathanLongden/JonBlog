// login
//	loginAction
//	loginPostData
//		loginPostForm


var React = require('react');

var CreateLoginPostForm = React.createClass({
  

  render: function(){
    return (
      <div>
			<div className="container">
				<form className="form-inline" onSubmit={this.props.handleUserSubmit}>
					<div className="form-group">
						<label>UserName</label>
						<input type="text" className='form-control' placeholder="Email"
							onChange={this.props.handleEmailChange} />
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="text"  className='form-control' placeholder="Password"
							onChange={this.props.handlePassWordChange} />
					</div>
					<div className="form-group">
						<label>First-Name</label>
						<input type="text"  className='form-control' placeholder="First Name"
							onChange={this.props.handleFirstNameChange} />
					</div>
					<div className="form-group">
						<label>Last-Name</label>
						<input type="text"  className='form-control' placeholder="Last Name"
							onChange={this.props.handleLastNameChange} />
					</div>
					<div className="form-group">
						<label>Retype Password</label>
						<input type="text"  className='form-control' placeholder="Retype Password"
							 />
					</div>
					<button type="submit" className="btn btn-Primary">Click to Create New Account</button>
				</form>
			</div>			
      </div>
      )
  }
});

module.exports = CreateLoginPostForm;
