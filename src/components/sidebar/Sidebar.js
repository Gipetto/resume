import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.scss';
import withFadeIn from '../util';

class SidebarItem extends React.Component {
	toggleHover() {
		// dummy function to trigger hover events
	}

	render() {
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
}

SidebarItem.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string,
		text: PropTypes.string
	})
};


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
	buzzwords: PropTypes.array
};
