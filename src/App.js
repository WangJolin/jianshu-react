import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './common/Header/index';
import store from './store/index';

function App() {
	return (
		<Router>
			<Provider store={store}>
				<Route path="/" component={Header}></Route>
			</Provider>
		</Router>
	);
}

export default App;
