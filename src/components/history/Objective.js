import React from 'react';
import PropTypes from 'prop-types';

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
	text: PropTypes.string
};