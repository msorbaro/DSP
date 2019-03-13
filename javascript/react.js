'use strict';

const e = React.createElement;

const div = React.createFactory('div')
const ul = React.createFactory('ul')
const li = React.createFactory('ul')
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
			{className: 'navbar navbar-expand-lg navbar-light bg-light'},
			a({className: 'navbar-brand', href: 'index.html'},
				img({src: 'images/skipa_logo.png', width: '30', height: 'auto', className: 'd-inline-block align-top'}),
				'Dartmouth Ski Patrol'),
			button({className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNav', 'aria-controls':"navbarNav", 'aria-expanded':"false", 'aria-label':"Toggle navigation"},
				e('span',{className: 'navbar-toggler-icon'})),
			div({className: 'collapse navbar-collapse', id:'navbarNav'},
				ul({className: 'navbar-nav'},
					li({className: 'nav-item active'},
						a({className: 'nav-link', href:'index.html', value:"Dartmouth Ski Patrol"},'Home')),
					li({className: 'nav-item'},
						a({className: 'nav-link', href:'#', value:"About DSP"},'About DSP')),
					li({className: 'nav-item dropdown'},
						a({className: 'nav-link dropdown-toggle', id:'navbarDropdown', role:'button', 'data-toggle':'dropdown', 'aria-haspopup':'true', 'aria-expanded':'false'},'Members'),
						div({className: 'dropdown-menu', 'aria-labelledby':'navbarDropdown'},
							a({className: 'dropdown-item', href:'#!how_to_join', value:"How to Join"},'How to Join'),
							a({className: 'dropdown-item', href:'#!roster', value:"Roster"}, 'Roster'),
							a({className: 'dropdown-item', href:'#!for_members', value: "For Members"},'For Members'))),
					li({className: 'nav-item'},
						a({className: 'nav-link', href:'#'},'Contact Us')),
					li({className: 'nav-item'},
						a({className: 'nav-link', href:'#'},'Donate'))))
			)
	}
}

class Jumbotron extends React.Component {
	render() {
		return e(
			'div',
			{className: 'jumbotron jumbotron-fluid p-0'},
			div({className: 'img-jumbotron'},
				div({className: 'bg-dark darkened'},
					img({className: 'img-fluid', src:"images/Header.JPEG"})),
				div({className: 'img-overlay text-dark'},e('h1',{},'{{title}}'))))
	}
}

class MemberBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {display:true, small:false}
  }
  hover(b) {
  	if ($(window).width() < 1200) {
  		this.setState({
  			display: b,
  			small: true
  		})
  	} else {
  		this.setState({
  			display: b,
  			small: false
  		})
  	}
  }
  render() {
  	if (this.props.val.img_url == undefined){
    	this.props.val.img_url = 'avatar'
    }
    return div({className: 'card member-box', height:'18rem',  onMouseEnter: () => this.hover(false), onMouseLeave: () => this.hover(true)},
      img({className: 'card-img-top ' + ((!this.state.display || this.state.small) ? 'darkened':''), src:'images/members/'+this.props.val.img_url+'.png'}),
      div({className: 'img-overlay font-weight-light w-100 text-dark  d-' + (((!this.state.display) || this.state.small) ? '':'xl-none') + ''},
        e('h2', {}, this.props.val.first + ' '+ this.props.val.last),
        e('span', {className: 'd-none d-md-block'},
        	e('p', {}, 'Home Mountain: '+this.props.val.home_mtn),
	        e('p', {}, 'Run of Choice: '+this.props.val.fav_run),
	        e('p',{}, 'Year: '+this.props.val.grad_year),
	        e('p',{}, this.props.val.superlative)
        )))
        
  }
}
const nav_container = document.querySelector('#nav_container');
ReactDOM.render(e(NavBar), nav_container);
const jumbotron_container = document.querySelector('#jumbotron_container');
ReactDOM.render(e(Jumbotron), jumbotron_container);
