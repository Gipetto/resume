import React from 'react';
import PropTypes from 'prop-types';
import withFadeIn from '../util';


export default class EmploymentList extends React.Component {
	render() {
		return (
			<dl>
				{this.props.workHistory.map((item, i) => (
					<FadeInEmploymentListItem key={i} item={item}/>
				))}
			</dl>
		);
	}
}

EmploymentList.propTypes = {
	workHistory: PropTypes.arrayOf(PropTypes.object)
};

class EmploymentListItem extends React.Component {
	render() {
		return (
			<div className="h">
				<dt>
					{this.props.item.position}<br/>
					<span>
						{this.props.item.company}, {this.props.item.location}. &nbsp;
						{this.props.item.from} - {this.props.item.to}
					</span>
				</dt>
				<dd>
					{this.props.item.description.split('\\n').map((text, i) => (
						<p key={i}>{text.trim()}</p>
					))}
				</dd>
			</div>
		);
	}
}

EmploymentListItem.propTypes = {
	item: PropTypes.shape({
		to: PropTypes.string,
		from: PropTypes.string,
		position: PropTypes.string,
		company: PropTypes.string,
		location: PropTypes.string,
		description: PropTypes.string,
	})
};

let FadeInEmploymentListItem = withFadeIn(EmploymentListItem, <div />);