import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './common/Header/index';
import store from './store/index';
import Detail from './pages/detail/index';
import Home from './pages/home/index';
function App() {
	return (
		<Provider store={store}>
			<Header />
			<Router>
				<Route path="/" exact component={Home}></Route>
				<Route path="/detail" exact component={Detail}></Route>
			</Router>
		</Provider>
	);
}

export default App;
