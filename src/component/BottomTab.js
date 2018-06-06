import React, {Component} from 'react';
import '../styles/bottomTab.css'

export default class TabBanner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mineClass: 'mine',
			homeClass: 'home_active',
			homeTextClass: 'active',
			mineTextClass: '',
		}
	}

	render() {
		return (
			<div className={'tab'}>
				<div className={'tabItem'} onClick={this.clickHome.bind(this)}>
					<span className={'tabIcon '+this.state.homeClass}></span>
					<p className={'tabName '+this.state.homeTextClass}>首页</p>
				</div>
				<div className={'tabItem'} onClick={this.clickMine.bind(this)}>
					<span className={'tabIcon '+this.state.mineClass}></span>
					<p className={'tabName '+this.state.mineTextClass}>我的</p>
				</div>
			</div>
		)
	}
	clickMine(){
		this.setState({
			mineClass: 'mine_active',
			homeClass: 'home',
			homeTextClass: '',
			mineTextClass: 'active',
		})
		this.props.history.replace('/Main/Mine');
	}
	clickHome(){
		this.setState({
			mineClass: 'mine',
			homeClass: 'home_active',
			homeTextClass: 'active',
			mineTextClass: '',
		})
		this.props.history.replace('/Main');

	}
}