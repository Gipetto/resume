import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


function withFadeIn(WrappedComponent, placeHolder) {
	function FirstChild(props) {
		const childrenArray = React.Children.toArray(props.children);
		return childrenArray[0] || null;
	}

	return React.createClass({
		displayName: 'FadeInWrapper',

		getInitialState: function () {
			return {loading: true};
		},

		componentDidMount: function () {
			let self = this;
			let el = this.elem;
			window.getComputedStyle(el).opacity;

			setTimeout(() => {
				self.setState({loading: false});
			}, (500 + (self.props.i * 100)));
		},

		render: function () {
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
	});
}

exports.withFadeIn = withFadeIn;
