import React from 'react';
import PropTypes from 'prop-types';

export default class Objective extends React.Component {
	render() {
		return (
			<div className="h">
				{this.props.text.split('\\n').map((text, i) => (
					<p key={i}>{text.trim()}</p>
				))}
			</div>
		);
	}
}

Objective.propTypes = {
	text: PropTypes.string
};