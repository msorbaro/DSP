'use strict';

const e = React.createElement;

const div = React.createFactory('div')
const a = React.createFactory('a')
const img = React.createFactory('img')
const button = React.createFactory('button')

class NavBar extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return e(
			'nav',
			{className: 'navbar navbar-expand-lg navbar-light bg-light', id: 'navbarNav'},
			a({className: 'navbar-brand', href: 'index.html'},
				img({src: 'images/skipa_logo.png', width: '30', height: 'auto', className: 'd-inline-block align-top'}),
				'Dartmouth Ski Patrol'),
			button({className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNav'}),
			div({className: 'collapse navbar-collapse'},
				div({className: 'navbar-nav'},
					a({className: 'nav-item nav-link active', href: 'index.html'},'Home'),
					a({className: 'nav-item nav-link active', href: '#'},'About DSP'),
					a({className: 'nav-item nav-link active', href: 'new_members.html'},'Members'),
					a({className: 'nav-item nav-link active', href: '#'},'Contact Us'),
					a({className: 'nav-item nav-link active', href: '#'},'Donate')))
			)
	}
}

class Jumbotron extends React.Component {
	render() {
		return e(
			'div',
			{className: 'jumbotron jumbotron-fluid p-0'},
			div({className: 'img-jumbotron'},
				img({className: 'img-fluid', src:"images/Header.JPEG"}),
				div({className: 'img-caption text-light'},e('h1',{},this.props.title))))
	}
}

const title = $(document).find("title").text();

const nav_container = document.querySelector('#nav_container');
ReactDOM.render(e(NavBar), nav_container);
const jumbotron_container = document.querySelector('#jumbotron_container');
ReactDOM.render(e(Jumbotron,{'title': title}), jumbotron_container);
