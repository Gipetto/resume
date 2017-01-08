import React from 'react';
import EmploymentList from './history/EmploymentList';
import Objective from './history/Objective';
let withFadeIn = require('./util').withFadeIn;


let FadeInObjective = withFadeIn(Objective, <div />);

export default class History extends React.Component {
	render() {
		return (
			<div id="core" className="block br swap-right">
				<section id="objective" className="block-group">
					<div className="block cl">
						<h2>Objective</h2>
					</div>
					<div className="block cr">
						<FadeInObjective key="objective" text={this.props.objective}/>
					</div>
				</section>
				<section id="current-work" className="block-group">
					<div className="block cl">
						<h2>Current Work</h2>
					</div>
					<div className="block cr">
						<EmploymentList workHistory={[this.props.currentWork]}/>
					</div>
				</section>
				<section id="work-history" className="block-group">
					<div className="block cl">
						<h2>Work History</h2>
					</div>
					<div className="block cr">
						<EmploymentList workHistory={this.props.workHistory}/>
					</div>
				</section>
				<section id="education" className="block-group">
					<div className="block cl">
						<h2>Education</h2>
					</div>
					<div className="block cr">
						<div className="h">
							<ul>
								{this.props.education.map((item, i) => (
									<li key={i}>
										{item.description}, {item.date} <span>{item.institution}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

History.propTypes = {
	objective: React.PropTypes.string,
	currentWork: React.PropTypes.object,
	workHistory: React.PropTypes.array,
	education: React.PropTypes.array
};
