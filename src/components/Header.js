import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="block-group">
				<div className="vcard block bl">
					<h1 className="n" data-title={this.props.name}>{this.props.name}</h1>
					<address className="adr">
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
						<a rel="noopener noreferrer" target="_blank" href={this.props.contact.methods.url}>{this.props.contact.methods.url}</a>
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
	name: PropTypes.string,
	contact: PropTypes.shape({
		address: PropTypes.shape({
			streetAddress: PropTypes.string,
			locality: PropTypes.string,
			region: PropTypes.string,
			postalCode: PropTypes.string,
			countryName: PropTypes.string
		}),
		methods: PropTypes.shape({
			tel: PropTypes.string,
			url: PropTypes.string,
			email: PropTypes.string,
		})
	})
};
