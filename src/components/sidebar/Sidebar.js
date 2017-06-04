import React from 'react';
import './sidebar.scss';
let withFadeIn = require('./../util').withFadeIn;

let SidebarItem = React.createClass({
	propTypes: {
		item: React.PropTypes.shape({
			name: React.PropTypes.string,
			text: React.PropTypes.string
		})
	},

	toggleHover: function() {
		// dummy function to trigger hover events
	},

	render: function () {
		if (this.props.item.name == 'separator') {
			return (<li className="separator"/>);
		} else {
			return (
				<li onTouchEnd={this.toggleHover}>
					{this.props.item.name}
					<span className="bubble" dangerouslySetInnerHTML={{__html: this.props.item.text}}/>
				</li>
			);
		}
	}
});

let FadeInSidebarItem = withFadeIn(SidebarItem, <li />);

export default class Sidebar extends React.Component {
	render() {
		return (
			<aside className="block bl swap-left">
				<div id="buzzwords">
					<h3>Buzzwords</h3>
					<ul className="bubbles">
						{this.props.buzzwords.map((item, i) => (
							<FadeInSidebarItem key={i} item={item} i={i}/>
						))}
					</ul>
				</div>
			</aside>
		);
	}
}

Sidebar.propTypes = {
	buzzwords: React.PropTypes.array
};
