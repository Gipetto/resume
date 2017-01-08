import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './components/Resume';

function run() {
	ReactDOM.render(<Resume/>, document.getElementById('main'));
}

if (window.addEventListener) {
	window.addEventListener('DOMContentLoaded', run);
} else {
	window.attachEvent('onload', run);
}
