import React, { Component } from 'react';
import './App.css';
import Menu from './components/LandingPage/Menu';
// import Body from './components/LandingPage/Body';
import IndexPage from './components/LandingPage/IndexPage';
import Stripe from './components/Stripe';
import Workorderform from './components/workorderform';
// import Register from './components/DashBoard/register';

class App extends Component {
	render() {
		return (
			<div>
				<Menu />
				{/* <Body /> */}
				<IndexPage />
				<Stripe />
				<Workorderform />
			</div>
		);
	}
}

export default App;
