var React = require('react');
var TableView = require('../jsx/tableview.js');

// must ensure all of your fields have values or react table view will not render
var DATA = [ 
  { id: 0, make: 'Honda', model: 'NSX', year: '1997'},
  { id: 1, make: 'Toyota', model: 'Supra', year: '1996'},
  { id: 2, make: 'Nissan', model: '300ZX', year: '1998'}
]

React.render(
	React.createElement(
		TableView, 
		{data: DATA}
	),
	document.getElementById("container")
);
