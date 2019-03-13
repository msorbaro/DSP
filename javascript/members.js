class MemberBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {display:true}
    if (this.props.val.img_url == undefined){
      this.props.val.img_url = "avatar"
    }
  }
  render() {
    console.log(this.props)
    return div({className: 'card member-box', height:'18rem',  onMouseEnter: () => this.setState({display:false}), onMouseLeave: () => this.setState({display:true})},
      img({className: 'card-img-top' + ((!this.state.display) ? ' darkened':''), src:'images/members/'+this.props.val.img_url+'.png'}),
      div({className: 'img-caption w-100 text-dark', hidden: this.state.display},
        e('h2', {}, this.props.val.first + ' '+ this.props.val.last),
        e('p', {}, 'Home Mountain: '+this.props.val.home_mtn),
        e('p', {}, 'Run of Choice: '+this.props.val.fav_run),
        e('p',{}, 'Year: '+this.props.val.grad_year),
        e('p',{}, this.props.val.superlative)))
  }
}

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCDvmvGHrQ9FxSzjjBQgMmiwlhYybedXOg",
  authDomain: "dskipa.firebaseapp.com",
  databaseURL: "https://dskipa.firebaseio.com",
  projectId: "dskipa",
  storageBucket: "dskipa.appspot.com",
  messagingSenderId: "649676799686"
};

firebase.initializeApp(config);

var ref = firebase.database().ref();

var apprenti_items = []

ref.on("value", function(snapshot) {
   $.each(snapshot.val()[0].members, function(index, val) {
    if (val != undefined){
        apprenti_items.push(e(MemberBox,{'val': val}))
      }
    });
  const apprenti_block_container = document.querySelector('#apprenti-deck');
  ReactDOM.render(e('span',null,apprenti_items), apprenti_block_container);
}, function (error) {
   console.log("Error: " + error.code);
});