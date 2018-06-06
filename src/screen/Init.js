import React, {Component} from 'react';
import '../styles/init.css'

export default class Init extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}
	render(){
		return(
			<div className={"page"}>
				<p className={"btn"} onClick={this.gotoHome.bind(this)}>进入应用</p>
			</div>
		)
	}
	gotoHome(){
		this.props.history.push('/Main')
	}
}
