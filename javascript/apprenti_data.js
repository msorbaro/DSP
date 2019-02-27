members_json = '[{"first":"Andy","last":"Johnson","assoc":"P"},{"first":"Matt","last":"Fulton","assoc":"P"},{"first":"Honor","last":"Paine","assoc":"P"},{"first":"Leanne","last":"Hatch","assoc":"P"},{"first":"Otto","last":"Salmi","assoc":"P"},{"first":"Raiden","last":"Meyer","assoc":"P"},{"first":"Ivo","last":"Erben","assoc":"P"},{"first":"Matt","last":"Gardner","assoc":"P"},{"first":"Avery","last":"Frankenberg","assoc":"P"},{"first":"Kate","last":"French","assoc":"P"},{"first":"Michael","last":"Cather","assoc":"P"},{"first":"Sarah","last":"Kennedy","assoc":"P"},{"first":"Daryl","last":"Holthoff","assoc":"P"},{"first":"Sarah","last":"Kolk","assoc":"P"},{"first":"Eric","last":"Gokee","assoc":"P"},{"first":"Kevin","last":"Gross","assoc":"P"},{"first":"Whitaker","last":"Fanestil","assoc":"P"},{"first":"Christina","last":"Schoeller","assoc":"C"},{"first":"Mike","last":"Bayer","assoc":"P"},{"first":"Madison","last":"Hazard","assoc":"P"},{"first":"Ryan","last":"Ewing","assoc":"C"},{"first":"Charlotte","last":"Driscoll","assoc":"C"},{"first":"Jordan","last":"Sandford","assoc":"P"},{"first":"Russell","last":"Beckerman","assoc":"P"},{"first":"Sophia","last":"Kocher","assoc":"C"},{"first":"Kiera","last":"Klinsky","assoc":"C"},{"first":"Matt","last":"Moniz","assoc":"P"},{"first":"Coby","last":"Gibson","assoc":"C"},{"first":"Katie","last":"Bogart","assoc":"P"},{"first":"Michael","last":"Beutner","assoc":"P"},{"first":"Ella","last":"Dobson","assoc":"C"},{"first":"Diana","last":"Uhrig","assoc":"P"},{"first":"Nolan","last":"Sankey","assoc":"C"},{"first":"James","last":"Dinulos","assoc":"P"},{"first":"Andrew","last":"Binder","assoc":"C"},{"first":"Ann","last":"Carpenter","assoc":"P"},{"first":"Brody","last":"Mcnutt","assoc":"P"},{"first":"Trevor","last":"Hopkins","assoc":"C"},{"first":"Gracie","last":"Durham","assoc":"C"},{"first":"Colin","last":"Fennelly","assoc":"C"},{"first":"Brian","last":"Akin","assoc":"P"},{"first":"Darby","last":"Read","assoc":"C"},{"first":"Annie","last":"Yanofsky","assoc":"C"},{"first":"Jason","last":"Cushman","assoc":"C"},{"first":"David","last":"Niehaus","assoc":"C"},{"first":"Krissy","last":"Saraceno","assoc":"P"},{"first":"Jim","last":"Geiling","assoc":"P"},{"first":"Henry","last":"Hilton2","assoc":"P"},{"first":"Lucas","last":"Andersen","assoc":"P"},{"first":"Saheer2","last":"Mathrani","assoc":"P"},{"first":"Winston","last":"Trope","assoc":"P"},{"first":"Henry","last":"Hilton","assoc":"P"},{"first":"Saheer","last":"Mathrani","assoc":"P"},{"first":"Karam","last":"Sandhu","assoc":"P"},{"first":"Dasbach","last":"Burdon","assoc":""},{"first":"Caroline","last":"Lauer","assoc":"P"},{"first":"Hatch","last":"Leanne","assoc":"P"},{"first":"","last":"","assoc":""},{"first":"Alana","last":"Mcclements","assoc":"A"},{"first":"Emery","last":"Rheam","assoc":"A"},{"first":"Sophie","last":"Kylander","assoc":"A"},{"first":"Izzy","last":"Kocher","assoc":"A"},{"first":"Grace","last":"Hammarskjold","assoc":"A"},{"first":"Henry","last":"Prestegaard","assoc":"A"},{"first":"Campbell","last":"Whalen","assoc":"A"},{"first":"Benjamin","last":"Cape","assoc":"A"},{"first":"Blake","last":"Daugherty","assoc":"A"},{"first":"Ish","last":"Mclaughlin","assoc":"A"},{"first":"James","last":"Fleming","assoc":"A"},{"first":"Everett","last":"Magnuson","assoc":"A"},{"first":"Nicholas","last":"Schoeller","assoc":"A"},{"first":"Una","last":"Wesvold","assoc":"A"},{"first":"Niklas","last":"Koehne","assoc":"A"},{"first":"Billy","last":"Gano","assoc":"A"}]'

members = JSON.parse(members_json)

class MemberBox extends React.Component {
	constructor(props) {
		super(props)
		this.state = {display:true}
		console.log(this.props.member)
	}
	render() {
		return div({className: 'card member-box', height:'18rem',  onMouseEnter: () => this.setState({display:false}), onMouseLeave: () => this.setState({display:true})},
			img({className: 'card-img-top', src:'images/members/izzy.png'}),
			div({className: 'img-caption w-100 text-light', hidden: this.state.display},
				e('h2', {}, this.props.member.first + ' '+ this.props.member.last),
				e('p', {}, 'Home Mountain: Crystal Mountain, WA'),
				e('p', {}, 'Run of Choice: Wardons')))
	}
}

var apprenti_items = members.map(function (member) {
	if (member.assoc == "A"){
		return e(MemberBox,{member})
	}
})

const apprenti_block_container = document.querySelector('#apprenti-deck');
ReactDOM.render(e('span',null,apprenti_items), apprenti_block_container);


