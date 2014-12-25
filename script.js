var app = angular.module('attest', ['decipher.tags', 'ui.bootstrap']);

app.controller('atController', ['$scope', function($scope) {

	$scope.test = 'Hello Angular';

	$scope.foo = [
		{name: 'foo1'}, {name: 'bar4', value: 'v1'},
		{name: 'foo5'}, {name: 'bar5', value: 'v2'},
		{name: 'foo6'}, {name: 'bar6', value: 'v3'}
	];

	$scope.baz = [
		{name: 'foo1'}, {name: 'bar1'},
		{name: 'foo2'}, {name: 'bar2'},
		{name: 'foo3'}, {name: 'bar3'}
	];

}]);