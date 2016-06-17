var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

// import {Router, Route, hashHistory, IndexRoute } from 'react-router'; 
// this is a Method on React router "Above"



var Main = require('./../main.js');
var Home = require('./../home.js');
var Character = require('./../character.js');
var Contact = require('./../contact.js');
var Login = require('./../loginApp.js');
var Inspiration = require('./../inspiration');


ReactDom.render(
	(<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<Route path='/character' component={Character} />
			<Route path='/inspiration' component={Inspiration} />
			<Route path='/contact' component={Contact} />
			<Route path='/login' component={Login} />
			<IndexRoute component={Home}/>
			
		</Route>
	</Router>)
	, 
	document.getElementById('app')
);

