import React, {Component} from 'react';
import '../styles/home.css'
import HomeBanner from '../component/HomeBanner'

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className={'homePage'}>
				<p className={'homeSearch'}>请输入商品名称</p>
				<HomeBanner/>
			</div>
		)
	}
}
