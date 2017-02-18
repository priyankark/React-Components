var React=require('react');

var ReactDom=require('react-dom');

var ListManager=require('./components/listManager.jsx');

ReactDom.render(<ListManager title="Ingredients"/>, document.getElementById('ingredients'));
ReactDom.render(<ListManager title="To Do"/>, document.getElementById('todo'));
ReactDom.render(<ListManager title="Christmas List" headingColor="red"/>, document.getElementById('christmas'));
