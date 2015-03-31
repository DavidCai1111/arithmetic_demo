var _ = require('lodash');

var randomArr = {};

randomArr.init = function(){
	var arrayToSort = [];

	//生成的随机数数组的长度
	var NUMBER_OF_THE_ARRAY_TO_SORT = 10000;
	//生成的随机数的范围
	var RANGE_OF_RANDOM_NUMBER = 9999;

	for(var i = 0 ; i < NUMBER_OF_THE_ARRAY_TO_SORT ; i++){
		arrayToSort.push(_.random(RANGE_OF_RANDOM_NUMBER));
	}

	return function(){
		return arrayToSort;
	}
};

randomArr.get = function(arr){
	_arr = [];
	for(var i = 0 ; i < arr.length ; i++){
		_arr[i] = arr[i];
	}
	return _arr;
};

module.exports = randomArr;