import React from 'react';
import PropTypes from 'prop-types';

export default class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	}

	show() {
		this.setState({
			visible: true
		});
	}

	hide() {
		this.setState({
			visible: false
		});
	}

	getMapUrl() {
		let mapzoom = 12;
		let mapsize = {
			width: 750,
			height: 245
		};
		let maptype = 'roadmap';
		let address = (this.props.address.streetAddress + ',' +
		this.props.address.locality + ',' +
		this.props.address.postalCode + ',' +
		this.props.address.region + ',' +
		this.props.address.countryName)
			.replace(/\s+/g, '+');
		return 'http://maps.googleapis.com/maps/api/staticmap?' +
			'center=' + address +
			'&zoom=' + mapzoom +
			'&size=' + mapsize.width + 'x' + mapsize.height +
			'&maptype=' + maptype +
			'&markers=color:red|size:mid|label:P|' + address +
			'&style=feature:road.local|visibility:off' +
			'&style=feature:transit|visibility:off' +
			'&style=feature:poi|visibility:off' +
			'&style=feature:poi.park|visibility:on' +
			'&style=feature:poi.park|element:labels|visibility:off' +
			'&style=feature:administrative|visibility:off' +
			'&style=feature:landscape|element:labels|visibility:off' +
			'&sensor=false';
	}

	render() {
		let imgUrl = encodeURI(this.getMapUrl());
		let animationClass = this.state.visible ? 'fade-in-item-appear-active' : 'fade-in-item-appear-inactive';
		return (
			<div className={'map fade-in-item-appear ' + animationClass}>
				<img src={imgUrl} alt=""/>
			</div>
		);
	}
}

Map.propTypes = {
	address: PropTypes.shape({
		streetAddress: PropTypes.string,
		locality: PropTypes.string,
		region: PropTypes.string,
		postalCode: PropTypes.string,
		countryName: PropTypes.string,
	})
};