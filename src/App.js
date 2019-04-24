import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout/Layout';
import classes from './App.css';

const App = props => {
	return (
		<div className={classes.App}>
			<Layout />
		</div>
	);
}

export default App;

if (document.getElementById('root')) {
	ReactDOM.render(<App />, document.getElementById('root'));
}
