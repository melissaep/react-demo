import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

// Styles
import './css/styles.css';

// Components
import App from './components/App';
import Start from './components/Start';
import NotFound from './components/NotFound';

// Routing
const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Start} />
				<Match pattern="/todolist/:name" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
};

// Render
ReactDOM.render(<Root/>, document.getElementById('main'));
