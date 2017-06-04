import React from 'react';
import axios from 'axios';
import Header from './Header';
import History from './History';
import Sidebar from './sidebar/Sidebar';
let withFadeIn = require('./util').withFadeIn;


let FadeInHeader = withFadeIn(Header, <header/>);

export default class Resume extends React.Component {
	constructor() {
		super();
		this.state = {
			'name': '',
			'contact': {
				'address': {
					'streetAddress': '',
					'locality': '',
					'region': '',
					'postalCode': '',
					'countryName': ''
				},
				'methods': {
					'email': '',
					'tel': '',
					'url': ''
				}
			},
			'buzzwords': [],
			'objective': '',
			'currentWork': {
				'from': '',
				'to': '',
				'position': '',
				'company': '',
				'location': '',
				'description': ''
			},
			'workHistory': [],
			'education': []
		};
	}

	componentWillMount() {
		let _this = this;
		this.serverRequest = axios.get('data/shawn-parker.json', {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json'
			},
			responseType: 'json'
		}).then(function (result) {
			_this.setState(result.data);
		});
	}

	componentWillUnmount() {
		this.serverRequest.abort();
	}

	render() {
		return (
			<div id="resume">
				<FadeInHeader name={this.state.name} contact={this.state.contact}/>
				<div id="content" className="block-group">
					<History objective={this.state.objective}
							currentWork={this.state.currentWork}
							workHistory={this.state.workHistory}
							education={this.state.education}/>
					<Sidebar buzzwords={this.state.buzzwords}/>
				</div>
			</div>
		);
	}
}
