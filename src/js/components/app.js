/** @jsx React.DOM */
var React = require('react');
var Catalog = require('../components/app-catalog.js');
var Cart = require('../components/app-cart.js');

var APP = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Lets shop</h1>
				<Catalog />
				<Cart />
			</div>
		)
	}
});

module.exports = APP;