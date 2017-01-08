import React from 'react';
import Map from './header/Map';


export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	handleMouseOver() {
		this.refs.theMap.show();
	}

	handleMouseOut() {
		this.refs.theMap.hide();
	}

	render() {
		return (
			<header className="block bl">
				<Map key="theMap" ref="theMap" address={this.props.contact.address}/>
				<div className="vcard">
					<h1 className="n" data-title={this.props.name}>{this.props.name}</h1>
					<address className="adr"
							onMouseEnter={this.handleMouseOver}
							onMouseLeave={this.handleMouseOut}>
						<div>
							<span className="street-address">{this.props.contact.address.streetAddress}</span>
						</div>
						<div>
							<span className="locality">{this.props.contact.address.locality}</span>,&nbsp;
							<span className="region">{this.props.contact.address.region}</span>
						</div>
						<div>
							<span className="postal-code">{this.props.contact.address.postalCode}</span>&nbsp;&nbsp;
							<span className="country-name">{this.props.contact.address.countryName}</span>
						</div>
					</address>
					<address className="tel">
						<a href={'tel:' + this.props.contact.methods.tel}>{this.props.contact.methods.tel}</a>
					</address>
					<address className="url">
						<a rel="external" href={this.props.contact.methods.url}>{this.props.contact.methods.url}</a>
					</address>
					<address className="email">
						<a href={'mailto:' + this.props.contact.methods.email}>{this.props.contact.methods.email}</a>
					</address>
				</div>
			</header>
		);
	}
}

Header.propTypes = {
	name: React.PropTypes.string,
	contact: React.PropTypes.shape({
		address: React.PropTypes.shape({
			streetAddress: React.PropTypes.string,
			locality: React.PropTypes.string,
			region: React.PropTypes.string,
			postalCode: React.PropTypes.string,
			countryName: React.PropTypes.string
		}),
		methods: React.PropTypes.shape({
			tel: React.PropTypes.string,
			url: React.PropTypes.string,
			email: React.PropTypes.string,
		})
	})
};
