import React from 'react';

export default class Objective extends React.Component {
	render() {
		return (
			<div className="h">
				<p>{this.props.text}</p>
			</div>
		);
	}
}

Objective.propTypes = {
	text: React.PropTypes.string
};