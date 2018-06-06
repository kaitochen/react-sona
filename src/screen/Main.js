import React, {Component} from 'react';
import '../styles/main.css'
import {Route,Switch} from 'react-router-dom';
import Home from './Home'
import Mine from './Mine'
import BottomTab from '../component/BottomTab'

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div>
				<Switch>
					<Route path={'/Main'} exact component={Home}/>
					<Route path={'/Main/Mine'} component={Mine}/>
					{/*<Route/>*/}
				</Switch>
				<BottomTab history={this.props.history}/>
			</div>
		)
	}
}