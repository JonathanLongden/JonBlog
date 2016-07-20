var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

// import {Router, Route, hashHistory, IndexRoute } from 'react-router'; 
// this is a Method on React router "Above"



// var Home = require('./../home.js');
// var Character = require('./../character.js');
// var Login = require('./../loginApp.js');

var Main = require('./../main.js');
var Contact = require('./../contact/contact.js');
var Inspiration = require('./../inspiration/inspiration.js');
var Resume = require('./../resume/resume.js');
var Blog = require('./../blog/blog.js');


ReactDOM.render(
	
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<Route path='/blog' component={Blog} />
			<Route path='/inspiration' component={Inspiration} />
			<Route path='/contact' component={Contact} />
			<Route path='/resume' component={Resume} />
		
		</Route>
	</Router>, 
	document.getElementById('app')
);

//<IndexRoute component={Home}/>	//loads Home upon going to site and goes between <Route path/> and </Route>
//<Route path='/login' component={Login} />

