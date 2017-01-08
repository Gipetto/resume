import React from 'react';
let withFadeIn = require('../util').withFadeIn;


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
	workHistory: React.PropTypes.arrayOf(React.PropTypes.object)
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
						<p key={i}>{text}</p>
					))}
				</dd>
			</div>
		);
	}
}

EmploymentListItem.propTypes = {
	item: React.PropTypes.shape({
		position: React.PropTypes.string,
		company: React.PropTypes.string,
		location: React.PropTypes.string,
		description: React.PropTypes.string,
	})
};

let FadeInEmploymentListItem = withFadeIn(EmploymentListItem, <div />);