jQuery(function($){
	
	makeMap = function() {
		// default zoom level
		var mapzoom = 14,
			mapsize = {
				width: 245,
				height: 245
			},
			maptype = 'roadmap';
		
		// for now lets assume that we find the address in the correct order
		var addr = [];
		$('div.adr span').each(function() {
			addr.push($(this).text());
		});
		var address = encodeURI(addr.join(',').replace(/\s+/g, '+'));
		
		var url = 'http://maps.google.com/maps/api/staticmap?' +
			'center=' + address + 
			'&zoom=' + mapzoom +
			'&size=' + mapsize.width + 'x' + mapsize.height +
			'&maptype=' + maptype +
			'&markers=color:red%7Clabel:foo%7C' + address +
			'&sensor=false';

		$('section.physical-address div.adr')
			.addClass('bubbles')
			.append(
				$('<span />')
					.addClass('bubble')
					.append(
						$('<img />')
							.attr('src', url)
							.attr('width', mapsize.width)
							.attr('height', mapsize.height)
					)
			);
	};

	controlBar = function() {
		
	};

	// init
	makeMap();
	controlBar();
});