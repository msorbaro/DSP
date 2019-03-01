var app = angular.module("myApp", ["ngRoute"])
.config(function($routeProvider) {
	$routeProvider.when('/how_to_join', {
		templateUrl: 'how_to_join.html',
		controller: 'how_to_join'
	}).when('/roster', {
		templateUrl: 'roster.html',
		controller: 'members'
	}).when('/for_members', {
		templateUrl: 'for_members.html',
		controller: 'for_members'
	})
})
.run(function($rootScope){
	$rootScope.title = document.title
	$(".nav-link, .dropdown-item").click(function(event) {
		$rootScope.title = $(this).attr('value')
	});
})
.controller('myCtrl', function($scope) {
})
.controller('how_to_join', function($scope) {
})
.controller('for_members', function($scope) {
})
.controller('members', function($scope) {

	// Initialize Firebase
	var config = {
	  apiKey: "AIzaSyCDvmvGHrQ9FxSzjjBQgMmiwlhYybedXOg",
	  authDomain: "dskipa.firebaseapp.com",
	  databaseURL: "https://dskipa.firebaseio.com",
	  projectId: "dskipa",
	  storageBucket: "dskipa.appspot.com",
	  messagingSenderId: "649676799686"
	};

	if (!firebase.apps.length) {
    	firebase.initializeApp(config);
	}

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
})