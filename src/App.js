import React, { Component } from 'react';
import { HashRouter,Route,Switch } from 'react-router-dom';
import './styles/App.css';

import Init from './screen/Init'
import Main from './screen/Main'

class App extends Component {
  render() {
    return (
    	<HashRouter>
			<Switch>
				<Route path={'/'} exact component={Init}/>
				<Route path={'/Main'} component={Main}/>
			</Switch>
		</HashRouter>
    );
  }
}

export default App;
