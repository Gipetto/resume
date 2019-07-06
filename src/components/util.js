import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default function withFadeIn(WrappedComponent, placeHolder) {
	function FirstChild(props) {
		const childrenArray = React.Children.toArray(props.children);
		return childrenArray[0] || null;
	}

	return class extends React.Component {
		// this.displayName = 'FadeInWrapper';

		constructor() {
			super();
			this.state = {loading: true};
		}

		componentDidMount() {
			let self = this;
			let el = this.elem;
			window.getComputedStyle(el).opacity;

			setTimeout(() => {
				self.setState({loading: false});
			}, (500 + (self.props.i * 100)));
		}

		render() {
			if (this.state.loading) {
				let e = React.createElement(placeHolder.type, {
					ref: (a) => {
						this.elem = a;
					}
				});
				return (e);
			} else {
				return (
					<ReactCSSTransitionGroup
						ref={(a) => { this.elem = a; }}
						component={FirstChild}
						transitionName="fade-in-item"
						transitionAppear={true}
						transitionAppearTimeout={500}
						transitionEnter={false}
						transitionLeave={false}>
						<WrappedComponent {...this.props} {...this.state}/>
					</ReactCSSTransitionGroup>
				);
			}
		}
	};
}
