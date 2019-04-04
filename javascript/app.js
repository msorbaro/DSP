var app = angular.module("myApp", ["ngRoute", "ngAnimate"])

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
	}).when('/', {
		templateUrl: 'home.html',
		controller: 'home'
	}).when('/about_dsp', {
		templateUrl: 'about_dsp.html',
		controller: 'aboutDSP'
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
.controller("aboutDSP", function($scope) {
	$scope.myFunction = function() {
		console.log("hi")
	}
})
.controller('how_to_join', function($scope) {
	$scope.changeTerm = function($event) {
		if ($event.target.innerHTML === $scope.term) {
			$scope.term = null
		} else {
			$scope.term = $event.target.innerHTML
		}
	}
})
.controller('for_members', function($scope) {
})
.controller('members', function($scope) {
	$scope.selectedType = 'new_members'
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

	ref.on("value", function(snapshot) {
		var first_year_data = []
		var patrol_data = []
		var candidate_data = []
		var board_data = []
		$.each(snapshot.val()[0].members, function(index, val) {
			if (val != undefined){
				if (val.assoc == 'A') {
					first_year_data.push(e(MemberBox,{'val': val}))
				} else if (val.assoc == 'C'){
					candidate_data.push(e(MemberBox,{'val': val}))
				} else if (val.assoc == 'P') {
					patrol_data.push(e(MemberBox,{'val': val}))
				} else if(val.assoc == 'B') {
					board_data.push(e(MemberBox,{'val': val}))
				}
		  	}
		});
		$scope.Pdata = {
			'new_members' : first_year_data,
			'patrolers' : patrol_data,
			'candidates' : candidate_data,
			'board' : board_data
			}
		$scope.changeSelection($scope.selectedType)
	  // if ($scope.selectedType == 'board') {
	  // 	ReactDOM.render(e('span',null,board_data), apprenti_block_container);
	  // } else if ($scope.selectedType == 'new_members') {
	  // 	ReactDOM.render(e('span',null,first_year_data), apprenti_block_container);
	  // }
		// case 'candidate':
		// 	ReactDOM.render(e('span',null,candidate_data), apprenti_block_container);
		// 	break
		// case 'patrolers':
		// 	ReactDOM.render(e('span',null,patrol_data), apprenti_block_container);
		// 	break;
	}, function (error) {
	   console.log("Error: " + error.code);
	});
	$scope.changeSelection = function(sel) {
		$scope.selectedType = sel
		const apprenti_block_container = document.querySelector('#apprenti-deck');
		ReactDOM.render(e('span',null,$scope.Pdata[$scope.selectedType]), apprenti_block_container);
	}
})
